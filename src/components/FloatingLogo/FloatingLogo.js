import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { YAKA_ASSETS } from '../../constants/yakaAssets';
import './FloatingLogo.css';

const NAV_H = 72;
const LOGO_SPLASH = 84;
const LOGO_FALLBACK_LAND = 64;
const ANCHOR_ID = 'yaka-logo-anchor';
const FLIGHT_MS = 1100;
const FAILSAFE_MS = 1600;

function readAnchor() {
  const el = document.getElementById(ANCHOR_ID);
  if (!el) return null;
  const icon = el.querySelector('[data-yaka-icon]');
  const r = (icon || el).getBoundingClientRect();
  if (r.width < 1) return null;
  return { x: r.left, y: r.top, width: r.width, height: r.height };
}

function fallbackHero(vw) {
  const pad = vw < 900 ? 16 : 40;
  return {
    x: vw - pad - LOGO_FALLBACK_LAND,
    y: NAV_H + 16,
    width: LOGO_FALLBACK_LAND,
    height: LOGO_FALLBACK_LAND,
  };
}

function viewportCenter(vw, vh) {
  return {
    x: vw / 2 - LOGO_SPLASH / 2,
    y: vh / 2 - LOGO_SPLASH / 2,
    width: LOGO_SPLASH,
    height: LOGO_SPLASH,
  };
}

/**
 * After splash: fly YAKA from viewport center → hero corner, then hand off.
 */
function FloatingLogo({ phase, onIntroComplete }) {
  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0);
  const [heroRect, setHeroRect] = useState(null);
  const [flying, setFlying] = useState(false);
  const completeRef = useRef(phase === 'ready');
  const startedRef = useRef(false);

  const measure = useCallback(() => {
    setVw(window.innerWidth);
    setVh(window.innerHeight);
    setHeroRect(readAnchor() ?? fallbackHero(window.innerWidth));
  }, []);

  useLayoutEffect(() => {
    measure();
    window.addEventListener('resize', measure, { passive: true });
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  useEffect(() => {
    if (phase !== 'flying') return undefined;
    measure();
    const t = setTimeout(measure, 80);
    return () => clearTimeout(t);
  }, [phase, measure]);

  const handleLand = useCallback(() => {
    if (completeRef.current) return;
    completeRef.current = true;
    setFlying(false);
    onIntroComplete();
  }, [onIntroComplete]);

  useEffect(() => {
    if (phase !== 'flying') return undefined;
    if (vw > 0 && vw < 768) {
      handleLand();
      return undefined;
    }
    const failsafe = setTimeout(handleLand, FAILSAFE_MS);
    return () => clearTimeout(failsafe);
  }, [vw, phase, handleLand]);

  useEffect(() => {
    if (phase !== 'flying' || vw < 768 || !heroRect || vh === 0) return undefined;
    if (completeRef.current || startedRef.current) return undefined;
    startedRef.current = true;
    setFlying(true);
    const landTimer = setTimeout(handleLand, FLIGHT_MS);
    return () => clearTimeout(landTimer);
  }, [phase, vw, vh, heroRect, handleLand]);

  if (phase !== 'flying' || !flying || vw < 768 || !heroRect || vh === 0) {
    return null;
  }

  const center = viewportCenter(vw, vh);
  const landW = Math.max(heroRect.width, 40);
  const landH = Math.max(heroRect.height, 40);

  return (
    <div
      className="floating-logo"
      style={{
        '--fl-from-left': `${center.x}px`,
        '--fl-from-top': `${center.y}px`,
        '--fl-from-w': `${center.width}px`,
        '--fl-from-h': `${center.height}px`,
        '--fl-to-left': `${heroRect.x}px`,
        '--fl-to-top': `${heroRect.y}px`,
        '--fl-to-w': `${landW}px`,
        '--fl-to-h': `${landH}px`,
      }}
      aria-hidden="true"
    >
      <img
        src={YAKA_ASSETS.icon}
        alt=""
        className="floating-logo__img"
        width={573}
        height={512}
        decoding="async"
        draggable={false}
      />
    </div>
  );
}

export default FloatingLogo;
