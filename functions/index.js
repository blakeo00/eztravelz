const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

const GEMINI_KEY = defineSecret("GEMINI_API_KEY");
const ELEVEN_KEY = defineSecret("ELEVENLABS_API_KEY");

const JENNIFER_VOICE_ID = "IDHS58OMlK9jZvRdhEVy";
const ELEVEN_MODEL = "eleven_turbo_v2_5";

exports.narrate = onRequest(
  {
    secrets: [GEMINI_KEY, ELEVEN_KEY],
    cors: true,
    invoker: "public",
    region: "us-central1",
    timeoutSeconds: 30,
    memory: "256MiB",
  },
  async (req, res) => {
    if (req.method !== "POST") return res.status(405).end();

    const { locationId, name, city, fallback } = req.body;
    if (!locationId) return res.status(400).json({ error: "missing locationId" });

    // ── 1. Check Firestore cache ──────────────────────────────────────────────
    const docRef = db.collection("narrations").doc(locationId);
    const cached = await docRef.get();
    if (cached.exists) {
      const d = cached.data();
      console.log(`[narrate] cache hit: ${locationId}`);
      return res.json({ text: d.text, audioBase64: d.audioBase64, cached: true });
    }

    // ── 2. Generate narration text via Gemini 2.0 Flash ──────────────────────
    let text = fallback || `Welcome to ${name} in ${city}.`;
    try {
      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY.value()}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [{
                text: `You are a charismatic travel guide narrating a walking tour. Write 3 vivid, sensory sentences about ${name} in ${city}. Make it feel like the listener is standing there right now. Be specific, atmospheric, and avoid clichés.`,
              }],
            }],
            generationConfig: { maxOutputTokens: 140, temperature: 0.9 },
          }),
        }
      );
      const gd = await geminiRes.json();
      text = gd?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? text;
    } catch (e) {
      console.error("[narrate] Gemini error:", e);
    }

    // ── 3. Generate audio via ElevenLabs ─────────────────────────────────────
    let audioBase64 = null;
    try {
      const elevenRes = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${JENNIFER_VOICE_ID}`,
        {
          method: "POST",
          headers: {
            "xi-api-key": ELEVEN_KEY.value(),
            "Content-Type": "application/json",
            "Accept": "audio/mpeg",
          },
          body: JSON.stringify({
            text,
            model_id: ELEVEN_MODEL,
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.8,
              style: 0.3,
              use_speaker_boost: true,
            },
          }),
        }
      );
      if (elevenRes.ok) {
        const buf = Buffer.from(await elevenRes.arrayBuffer());
        audioBase64 = buf.toString("base64");
      } else {
        console.error("[narrate] ElevenLabs error:", elevenRes.status, await elevenRes.text());
      }
    } catch (e) {
      console.error("[narrate] ElevenLabs error:", e);
    }

    // ── 4. Cache result in Firestore ─────────────────────────────────────────
    if (audioBase64) {
      await docRef.set({
        text,
        audioBase64,
        locationId,
        name,
        city,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      console.log(`[narrate] cached: ${locationId}`);
    }

    return res.json({ text, audioBase64 });
  }
);
