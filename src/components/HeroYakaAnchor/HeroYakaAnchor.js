import { BRAND_URL } from '../../constants/routes';
import useTheme, { withThemeParam } from '../../hooks/useTheme';
import { useIntroPhase } from '../Intro/IntroContext';
import { useScrollHandoffProgress } from '../ScrollHandoff/ScrollHandoff';
import YakaBrandMark from '../YakaBrandMark/YakaBrandMark';
import './HeroYakaAnchor.css';

/**
 * Hero-corner YAKA mark. Hidden until intro lands, fades out as scroll handoff starts.
 */
function HeroYakaAnchor() {
  const { phase } = useIntroPhase();
  const { theme } = useTheme();
  const progress = useScrollHandoffProgress();
  const visible = phase === 'ready';
  const scrollOpacity = progress <= 0 ? 1 : Math.max(0, 1 - progress / 0.08);
  const opacity = visible ? scrollOpacity : 0;

  return (
    <a
      id="yaka-logo-anchor"
      href={withThemeParam(BRAND_URL, theme)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="A YAKA Brand"
      className="hero-yaka-anchor"
      style={{
        opacity,
        pointerEvents: visible && opacity > 0.05 ? 'auto' : 'none',
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
