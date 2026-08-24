import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { YAKA_ASSETS } from '../../constants/yakaAssets';
import './ScrollHandoff.css';

const ScrollHandoffContext = createContext(0);

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

/**
 * Live progress 0→1 (LoanKonnekt-style).
 * startScrollY = when hero icon top would meet header bottom.
 */
function readProgress() {
  const hero = document.getElementById('yaka-logo-anchor');
  const header = document.querySelector('header');
  if (!header) return 0;

  const headerH = header.getBoundingClientRect().height || 80;

  if (!hero || hero.getBoundingClientRect().width === 0) {
    return clamp((window.scrollY - 40) / 160, 0, 1);
  }

  const icon = hero.querySelector('[data-yaka-icon]') || hero;
  const heroTop = icon.getBoundingClientRect().top;
  const startScrollY = window.scrollY + heroTop - headerH;
  return clamp((window.scrollY - startScrollY) / 160, 0, 1);
}

export function ScrollHandoffProvider({ children }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = null;
    const tick = () => {
      raf = null;
      setProgress(readProgress());
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    const retry = setTimeout(tick, 120);
    const retry2 = setTimeout(tick, 600);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      clearTimeout(retry);
      clearTimeout(retry2);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <ScrollHandoffContext.Provider value={progress}>{children}</ScrollHandoffContext.Provider>
  );
}

export function useScrollHandoffProgress() {
  return useContext(ScrollHandoffContext);
}

function readRect(id, iconOnly = false) {
  const el = document.getElementById(id);
  if (!el) return null;
  const target = iconOnly ? el.querySelector('[data-yaka-icon]') || el : el;
  const r = target.getBoundingClientRect();
  if (r.width < 1 || r.height < 1) return null;
  return { x: r.left, y: r.top, width: r.width, height: r.height };
}

/** Floating clone: hero corner → nav slot while scrolling (desktop). */
export function ScrollHandoffLogo() {
  const progress = useScrollHandoffProgress();
  const [heroRect, setHeroRect] = useState(null);
  const [navRect, setNavRect] = useState(null);

  const measure = useCallback(() => {
    setHeroRect(readRect('yaka-logo-anchor', true));
    setNavRect(readRect('yaka-nav-anchor'));
  }, []);

  useLayoutEffect(() => {
    measure();
    const t1 = setTimeout(measure, 100);
    const t2 = setTimeout(measure, 500);
    window.addEventListener('resize', measure, { passive: true });
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  if (!heroRect || !navRect) return null;

  const p = progress;
  const left = Math.round(heroRect.x + (navRect.x - heroRect.x) * p);
  const top = Math.round(heroRect.y + (navRect.y - heroRect.y) * p);
  const width = Math.round(heroRect.width + (navRect.width - heroRect.width) * p);
  const height = Math.round(heroRect.height + (navRect.height - heroRect.height) * p);

  let opacity = 0;
  if (p <= 0.08) opacity = p / 0.08;
  else if (p >= 0.92) opacity = (1 - p) / 0.08;
  else opacity = 1;

  return (
    <div
      className="scroll-handoff-logo"
      style={{
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`,
        opacity,
      }}
      aria-hidden="true"
    >
       <img
        src={YAKA_ASSETS.icon}
        alt=""
        className="scroll-handoff-logo__img"
        width={573}
        height={512}
        decoding="async"
        draggable={false}
      />
    </div>
  );
}
