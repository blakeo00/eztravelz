import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return NextResponse.json({ vibe: null }, { status: 200 });

  try {
    const { name, landmark, fallback, mode } = await req.json();

    const isTour = mode === 'tour';
    const prompt = isTour
      ? `You are a charismatic travel guide narrating a walking tour. Write 3 vivid, sensory sentences about ${name} in ${landmark}. Make it feel like the listener is standing there right now. Be specific, atmospheric, and avoid clichés.`
      : `Write exactly 2 punchy, sensory sentences describing the vibe of ${name} near ${landmark}. Focus on atmosphere and mood. No clichés.`;

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { maxOutputTokens: isTour ? 140 : 80, temperature: 0.9 },
        }),
      }
    );

    if (!res.ok) {
      console.error('[vibe]', await res.text());
      return NextResponse.json({ vibe: fallback });
    }

    const data = await res.json();
    const vibe = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? fallback;
    return NextResponse.json({ vibe });
  } catch (e) {
    console.error('[vibe]', e);
    return NextResponse.json({ vibe: null });
  }
}
