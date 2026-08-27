import { useEffect, useState } from 'react';
import { BRAND_URL } from '../../constants/routes';
import useTheme, { withThemeParam } from '../../hooks/useTheme';
import { useIntroPhase } from '../Intro/IntroContext';
import YakaBrandMark from '../YakaBrandMark/YakaBrandMark';
import './HeroYakaAnchor.css';

const DOCK_SCROLL_Y = 40;

/**
 * Hero-corner YAKA mark. Hidden until intro lands, then shown while
 * scrollY <= 40 — past that the navbar's own YAKA mark takes over (see
 * Header.js). The DOM node itself stays mounted at all times (only opacity
 * toggles) so FloatingLogo can always measure its real position/size as the
 * post-splash flight's landing target.
 */
function HeroYakaAnchor() {
  const { phase } = useIntroPhase();
  const { theme } = useTheme();
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    const onScroll = () => setDocked(window.scrollY > DOCK_SCROLL_Y);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showLogo = phase === 'ready' && !docked;

  return (
    <a
      id="yaka-logo-anchor"
      href={withThemeParam(BRAND_URL, theme)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="A YAKA Brand"
      className="hero-yaka-anchor"
      aria-hidden={showLogo ? undefined : 'true'}
      tabIndex={showLogo ? undefined : -1}
      style={{
        opacity: showLogo ? 1 : 0,
        pointerEvents: showLogo ? 'auto' : 'none',
      }}
    >
      <YakaBrandMark
        className="hero-yaka-anchor__mark"
        logoClassName="hero-yaka-anchor__icon"
        taglineClassName="hero-yaka-anchor__tagline"
        showTagline
      />
    </a>
  );
}

export default HeroYakaAnchor;
