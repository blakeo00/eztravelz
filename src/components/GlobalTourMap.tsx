'use client';

import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useJsApiLoader, GoogleMap, OverlayView, InfoWindow } from '@react-google-maps/api';
import citiesData from '@/data/locations.json';

interface AffTour { name: string; url: string; emoji: string; }
interface TourLocation { id: string; name: string; coords: { lat: number; lng: number }; vibe: string; tours?: AffTour[]; image?: string; imagePosition?: string; imageSize?: string; }
interface City { id: string; name: string; emoji: string; tagline: string; coords: { lat: number; lng: number }; zoom: number; color: string; pageLink?: string; pageLinkLabel?: string; locations: TourLocation[]; }

const CITIES: City[] = (citiesData as { cities: City[] }).cities;
const MAPS_KEY = process.env.NEXT_PUBLIC_MAPS_KEY ?? '';

function svUrl(lat: number, lng: number) {
  if (MAPS_KEY) return `https://www.google.com/maps/embed/v1/streetview?key=${MAPS_KEY}&location=${lat},${lng}&heading=0&pitch=0&fov=80`;
  return `https://maps.google.com/maps?q=${lat},${lng}&t=k&z=17&output=embed`;
}

const GLASS: React.CSSProperties = { background: 'rgba(255,240,212,0.06)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,240,212,0.12)', borderRadius: '16px' };
const BTN: React.CSSProperties = { border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', padding: '9px 20px', color: '#e2e8f0', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600, background: 'rgba(255,255,255,0.06)' };

const MAP_STYLES = [
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#a8d5e5' }] },
  { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#f5f0e8' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#ffffff' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#d6c9a0' }] },
  { featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] },
  { featureType: 'transit', stylers: [{ visibility: 'off' }] },
  { featureType: 'administrative', elementType: 'labels.text.fill', stylers: [{ color: '#37507a' }] },
];

function GlobalTourMapInner() {
  type View = 'world' | 'city' | 'location';
  const [view, setView] = useState<View>('world');
  const [activeCityId, setActiveCityId] = useState<string | null>(null);
  const [activeLocIdx, setActiveLocIdx] = useState(0);
  const [narrations, setNarrations] = useState<Record<string, string>>({});
  const [audioCache, setAudioCache] = useState<Record<string, string>>({}); // locationId → blob URL
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [gmap, setGmap] = useState<any>(null);
  const [popupCity, setPopupCity] = useState<string | null>(null);
  const [popupLoc, setPopupLoc] = useState<number | null>(null);
  const audioRef = useCallback((node: HTMLAudioElement | null) => { if (node) node.onended = () => setIsSpeaking(false); }, []);

  const { isLoaded } = useJsApiLoader({ id: 'google-map-script', googleMapsApiKey: MAPS_KEY });

  const activeCity = CITIES.find((c) => c.id === activeCityId) ?? null;
  const activeLoc = activeCity?.locations[activeLocIdx] ?? null;
  const narration = activeLoc ? (narrations[activeLoc.id] ?? activeLoc.vibe) : '';

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (!gmap) return;
    if (view === 'world') { gmap.panTo({ lat: 20, lng: 0 }); gmap.setZoom(2); }
    else if (activeCity) { gmap.panTo(activeCity.coords); gmap.setZoom(activeCity.zoom); }
  }, [view, activeCityId, gmap]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!activeLoc || view !== 'location' || narrations[activeLoc.id]) return;
    const id = activeLoc.id;
    setLoadingId(id);
    fetch('/api/narrate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ locationId: id, name: activeLoc.name, city: activeCity?.name, fallback: activeLoc.vibe }),
    })
      .then((r) => r.json())
      .then((d) => {
        setNarrations((p) => ({ ...p, [id]: d.text ?? activeLoc.vibe }));
        if (d.audioBase64) {
          const blob = new Blob([Uint8Array.from(atob(d.audioBase64), (c) => c.charCodeAt(0))], { type: 'audio/mpeg' });
          const url = URL.createObjectURL(blob);
          setAudioCache((p) => ({ ...p, [id]: url }));
        }
        setLoadingId(null);
      })
      .catch(() => { setNarrations((p) => ({ ...p, [id]: activeLoc.vibe })); setLoadingId(null); });
  }, [activeLoc?.id, view]); // eslint-disable-line react-hooks/exhaustive-deps

  const currentAudio = useCallback(() => document.getElementById('ez-tour-audio') as HTMLAudioElement | null, []);

  const playAudio = useCallback((locationId: string) => {
    const url = audioCache[locationId];
    if (!url) return;
    const el = currentAudio();
    if (el) { el.pause(); el.src = url; el.play(); setIsSpeaking(true); }
  }, [audioCache, currentAudio]);

  const stopSpeaking = useCallback(() => {
    const el = currentAudio();
    if (el) { el.pause(); el.currentTime = 0; }
    setIsSpeaking(false);
  }, [currentAudio]);

  const enterCity = (id: string) => { stopSpeaking(); setActiveCityId(id); setActiveLocIdx(0); setView('city'); setPopupCity(null); setPopupLoc(null); };
  const enterLocation = (idx: number) => { stopSpeaking(); setActiveLocIdx(idx); setView('location'); setPopupLoc(null); };
  const backToWorld = () => { stopSpeaking(); setView('world'); setActiveCityId(null); setPopupCity(null); };
  const backToCity = () => { stopSpeaking(); setView('city'); };
  const goNext = () => { if (!activeCity) return; stopSpeaking(); setActiveLocIdx((i) => (i + 1) % activeCity.locations.length); };
  const goPrev = () => { if (!activeCity) return; stopSpeaking(); setActiveLocIdx((i) => (i - 1 + activeCity.locations.length) % activeCity.locations.length); };

  const mapH = isMobile ? '300px' : '580px';

  const renderSidebar = () => (
    <div style={{ width: '100%', flexShrink: 0, background: 'rgba(10,15,30,0.92)', backdropFilter: 'blur(12px)', padding: isMobile ? '12px' : '16px 14px', display: 'flex', flexDirection: 'column', gap: '6px', overflowY: 'auto', overflowX: 'hidden', maxHeight: isMobile ? '280px' : '320px', borderTop: '1px solid rgba(255,240,212,0.08)' }}>
      {view === 'world' ? (
        <>
          <p style={{ color: '#38bdf8', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px', fontWeight: 700, flexShrink: 0 }}>Choose Your City</p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)', gap: '6px' }}>
          {[...CITIES].sort((a, b) => a.name.localeCompare(b.name)).map((city) => (
            <button key={city.id} onClick={() => enterCity(city.id)}
              style={{ textAlign: 'left', background: 'rgba(255,255,255,0.03)', border: `1px solid ${city.color}30`, borderRadius: '10px', padding: '8px 10px', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `${city.color}18`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{city.emoji}</span>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontFamily: 'var(--font-playfair)', color: '#f8fafc', fontWeight: 700, fontSize: '0.76rem', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{city.name}</p>
                  <p style={{ color: city.color, fontSize: '0.62rem', margin: '1px 0 0', opacity: 0.8 }}>{city.locations.length} stops</p>
                </div>
              </div>
            </button>
          ))}
          </div>
        </>
      ) : activeCity ? (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
            <button onClick={backToWorld} style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '0.72rem', cursor: 'pointer', textAlign: 'left', padding: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>← All Cities</button>
            <p style={{ fontFamily: 'var(--font-playfair)', color: '#f8fafc', fontWeight: 700, fontSize: '1rem', margin: 0 }}>{activeCity.emoji} {activeCity.name}</p>
            {activeCity.pageLink && (
              <a href={activeCity.pageLink} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: activeCity.color, color: '#0f172a', borderRadius: '10px', padding: '6px 12px', fontSize: '0.72rem', fontWeight: 800, textDecoration: 'none' }}>
                📖 Explore {activeCity.pageLinkLabel} →
              </a>
            )}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {activeCity.locations.map((loc, idx) => (
              <button key={loc.id} onClick={() => enterLocation(idx)}
                style={{ textAlign: 'left', background: idx === activeLocIdx ? `${activeCity.color}20` : 'rgba(255,255,255,0.03)', border: `1px solid ${idx === activeLocIdx ? activeCity.color : 'rgba(255,255,255,0.06)'}`, borderRadius: '11px', padding: isMobile ? '7px 9px' : '9px 14px', cursor: 'pointer', transition: 'all 0.2s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: activeCity.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f172a', fontSize: '0.6rem', fontWeight: 800, flexShrink: 0 }}>{idx + 1}</div>
                  <p style={{ color: '#f1f5f9', fontSize: isMobile ? '0.72rem' : '0.8rem', fontWeight: 600, margin: 0, whiteSpace: 'nowrap' }}>{loc.name}</p>
                </div>
              </button>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );

  const renderMap = () => {
    if (!isLoaded) return (
      <div style={{ minHeight: mapH, background: '#f5f0e8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: '#37507a' }}>
          <div style={{ width: '36px', height: '36px', border: '3px solid #37507a', borderTopColor: 'transparent', borderRadius: '50%', animation: 'gtSpin 0.8s linear infinite', margin: '0 auto 10px' }} />
          <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Loading map…</p>
        </div>
      </div>
    );

    const popupCityObj = popupCity ? CITIES.find((c) => c.id === popupCity) : null;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: isMobile ? 'auto' : mapH }}>
        <div style={{ flex: '1 1 0', position: 'relative', minHeight: mapH }}>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%', minHeight: mapH }}
            center={{ lat: 30, lng: -30 }}
            zoom={2}
            onLoad={(m) => setGmap(m)}
            options={{ styles: MAP_STYLES, disableDefaultUI: true, zoomControl: true, gestureHandling: 'cooperative' }}
          >
            {view === 'world' && CITIES.map((city) => (
              <OverlayView key={city.id} position={city.coords} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                <div onClick={() => setPopupCity(city.id)} title={city.name}
                  style={{ width: '42px', height: '42px', borderRadius: '50%', background: city.color, border: '3px solid #fff0d4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.4)', cursor: 'pointer', transform: 'translate(-50%,-50%)' }}>
                  {city.emoji}
                </div>
              </OverlayView>
            ))}

            {view === 'world' && popupCityObj && (
              <InfoWindow position={popupCityObj.coords} onCloseClick={() => setPopupCity(null)}>
                <div style={{ minWidth: '140px' }}>
                  <strong style={{ color: '#37507a', display: 'block', marginBottom: '3px' }}>{popupCityObj.name}</strong>
                  <p style={{ fontSize: '11px', color: '#888', margin: '0 0 7px' }}>{popupCityObj.locations.length} stops · {popupCityObj.tagline}</p>
                  <button onClick={() => enterCity(popupCityObj.id)} style={{ background: popupCityObj.color, color: '#fff', border: 'none', borderRadius: '20px', padding: '4px 12px', fontSize: '11px', fontWeight: 700, cursor: 'pointer' }}>Start Tour →</button>
                </div>
              </InfoWindow>
            )}

            {view === 'city' && activeCity && activeCity.locations.map((loc, idx) => (
              <OverlayView key={loc.id} position={loc.coords} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
                <div onClick={() => setPopupLoc(idx)}
                  style={{ width: idx === activeLocIdx ? '36px' : '28px', height: idx === activeLocIdx ? '36px' : '28px', borderRadius: '50%', background: idx === activeLocIdx ? activeCity.color : '#1e293b', border: `2.5px solid ${activeCity.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: idx === activeLocIdx ? '#0f172a' : activeCity.color, fontSize: '0.7rem', fontWeight: 800, cursor: 'pointer', transform: 'translate(-50%,-50%)', boxShadow: '0 3px 12px rgba(0,0,0,0.45)' }}>
                  {idx + 1}
                </div>
              </OverlayView>
            ))}

            {view === 'city' && activeCity && popupLoc !== null && (
              <InfoWindow position={activeCity.locations[popupLoc].coords} onCloseClick={() => setPopupLoc(null)}>
                <div style={{ minWidth: '130px' }}>
                  <strong style={{ color: '#37507a', fontSize: '13px', display: 'block', marginBottom: '5px' }}>Stop {popupLoc + 1}: {activeCity.locations[popupLoc].name}</strong>
                  <button onClick={() => enterLocation(popupLoc)} style={{ background: activeCity.color, color: '#fff', border: 'none', borderRadius: '20px', padding: '4px 12px', fontSize: '11px', fontWeight: 700, cursor: 'pointer' }}>Explore →</button>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>

          <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', zIndex: 999, background: 'rgba(10,15,30,0.82)', backdropFilter: 'blur(8px)', borderRadius: '999px', padding: '5px 14px', border: '1px solid rgba(255,240,212,0.15)', pointerEvents: 'none', whiteSpace: 'nowrap' }}>
            <span style={{ color: '#e2e8f0', fontSize: '0.7rem', letterSpacing: '0.07em' }}>
              {view === 'world' ? '🌍 Click a city marker or card to begin' : `📍 ${activeCity?.locations.length} stops — click a pin or list item`}
            </span>
          </div>
        </div>
        {renderSidebar()}
      </div>
    );
  };

  const renderLocation = () => {
    if (!activeLoc || !activeCity) return null;
    const isLoading = loadingId === activeLoc.id;
    const ARROW: React.CSSProperties = { position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(0,0,0,0.45)', border: 'none', color: '#fff', cursor: 'pointer', backdropFilter: 'blur(6px)', transition: 'all 0.2s' };
    return (
      <div style={{ paddingTop: '6px', paddingBottom: '40px' }}>
        {/* ── Breadcrumb row ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
          {[{ label: '🌍 All Cities', action: backToWorld }, { label: `${activeCity.emoji} ${activeCity.name}`, action: backToCity }].map((crumb, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button onClick={crumb.action} style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '0.75rem', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}>{crumb.label}</button>
              <span style={{ color: '#64748b', fontSize: '0.75rem' }}>›</span>
            </span>
          ))}
          <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{activeLoc.name}</span>
        </div>

        {/* ── Title + action buttons (compact) ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-playfair)', color: '#fff0d4', fontWeight: 700, fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', margin: 0 }}>{activeLoc.name}</h3>
            <p style={{ color: activeCity.color, fontSize: '0.72rem', margin: '3px 0 0', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{activeCity.emoji} {activeCity.name} · Stop {activeLocIdx + 1} of {activeCity.locations.length}</p>
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: isMobile ? 'flex-start' : 'flex-end' }}>
            <button onClick={backToCity} style={{ ...BTN, fontSize: '0.74rem', padding: '6px 12px' }}>← Back</button>
            {activeCity.pageLink && (
              <a href={activeCity.pageLink} style={{ background: activeCity.color, color: '#0f172a', borderRadius: '10px', padding: '6px 12px', fontSize: '0.74rem', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                📖 {activeCity.pageLinkLabel} Guides
              </a>
            )}
          </div>
        </div>

        {/* ── Image / Street View with overlay arrows ── */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: `2px solid ${activeCity.color}40`, marginBottom: '12px', position: 'relative', paddingBottom: isMobile ? '56%' : '48%' }}>
          {activeLoc.image
            ? <img key={activeLoc.id} src={activeLoc.image} alt={activeLoc.name}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: (activeLoc.imageSize as React.CSSProperties['objectFit']) ?? 'cover', objectPosition: activeLoc.imagePosition ?? 'top center' }} loading="lazy" />
            : <iframe key={activeLoc.id} src={svUrl(activeLoc.coords.lat, activeLoc.coords.lng)} title={`View: ${activeLoc.name}`}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          }
          {/* Prev arrow on image */}
          <button onClick={goPrev} aria-label="Previous stop" style={{ ...ARROW, left: '10px' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.7)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-50%) scale(1.1)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.45)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-50%)'; }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          {/* Next arrow on image */}
          <button onClick={goNext} aria-label="Next stop" style={{ ...ARROW, right: '10px' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.7)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-50%) scale(1.1)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.45)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-50%)'; }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}><path d="M9 18l6-6-6-6" /></svg>
          </button>
          {/* Dot indicators on image */}
          <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', gap: '5px', alignItems: 'center' }}>
            {activeCity.locations.map((_, idx) => (
              <button key={idx} onClick={() => { stopSpeaking(); setActiveLocIdx(idx); }}
                aria-label={`Go to stop ${idx + 1}`}
                style={{ width: idx === activeLocIdx ? '20px' : '7px', height: '7px', borderRadius: '4px', background: idx === activeLocIdx ? activeCity.color : 'rgba(255,255,255,0.5)', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
            ))}
          </div>
        </div>

        {/* ── Narration + Play button ── */}
        <div style={{ ...GLASS, padding: '14px 18px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '14px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <p style={{ color: activeCity.color, fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>🎙 Tour Narration</p>
              <p style={{ color: isLoading ? '#64748b' : '#e2e8f0', fontSize: '0.88rem', lineHeight: 1.65, fontStyle: 'italic', margin: 0 }}>
                {isLoading ? 'Generating narration…' : narration}
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <audio id="ez-tour-audio" ref={audioRef} onEnded={() => setIsSpeaking(false)} style={{ display: 'none' }} />
            {!isSpeaking
                ? <button
                    onClick={() => playAudio(activeLoc.id)}
                    disabled={isLoading || !audioCache[activeLoc.id]}
                    style={{ background: (isLoading || !audioCache[activeLoc.id]) ? '#334155' : activeCity.color, color: (isLoading || !audioCache[activeLoc.id]) ? '#64748b' : '#0f172a', border: 'none', borderRadius: '999px', padding: '8px 18px', fontSize: '0.78rem', fontWeight: 800, cursor: (isLoading || !audioCache[activeLoc.id]) ? 'not-allowed' : 'pointer' }}>
                    {isLoading ? '⏳ Loading…' : !audioCache[activeLoc.id] ? '⏳ Preparing…' : '▶ Play Narration'}
                  </button>
                : <button onClick={stopSpeaking} style={{ background: '#ef4444', color: '#fff', border: 'none', borderRadius: '999px', padding: '8px 18px', fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer' }}>⏹ Stop</button>
              }
            </div>
          </div>
        </div>

        {/* ── Affiliate tour links ── */}
        {activeLoc?.tours && activeLoc.tours.length > 0 && (
          <div style={{ ...GLASS, padding: '12px 18px', marginBottom: '12px' }}>
            <p style={{ color: activeCity.color, fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>🎟 Book a Tour</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {activeLoc.tours.map((tour, i) => (
                <a key={i} href={tour.url} target="_blank" rel="sponsored noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', background: `${activeCity.color}14`, border: `1px solid ${activeCity.color}40`, borderRadius: '10px', padding: '8px 12px', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = `${activeCity.color}28`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = `${activeCity.color}14`; }}>
                  <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{tour.emoji}</span>
                  <span style={{ color: '#f1f5f9', fontSize: '0.8rem', fontWeight: 600, flex: 1 }}>{tour.name}</span>
                  <span style={{ color: activeCity.color, fontSize: '0.75rem', flexShrink: 0 }}>→</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section style={{ width: '100%', background: 'linear-gradient(180deg, #060d1a 0%, #0f172a 100%)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '64px 24px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: '#38bdf8', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '10px' }}>EZtravelZ Talking Tours</p>
          <h2 style={{ fontFamily: 'var(--font-playfair)', color: '#fff0d4', fontWeight: 700, fontSize: 'clamp(1.9rem,4vw,2.8rem)', margin: '0 0 14px', lineHeight: 1.15 }}>Take a Tour from your Chair</h2>
          <p style={{ color: '#e2e8f0', fontSize: '1rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}>
            Hear the stories about the places you want to visit from the comfort of your home. Click on the Map to start your Journey
          </p>
        </div>

        <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,240,212,0.07)', display: view === 'location' ? 'none' : 'block' }}>
          {renderMap()}
        </div>

        {view === 'location' && renderLocation()}
        {view !== 'location' && <div style={{ height: '64px' }} />}
      </div>
      <style>{`
        @keyframes gtSpin { to { transform: rotate(360deg); } }
        .gm-style-iw-d { overflow: hidden !important; }
      `}</style>
    </section>
  );
}

export default dynamic(() => Promise.resolve(GlobalTourMapInner), { ssr: false });
