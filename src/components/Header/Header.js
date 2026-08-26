import { useEffect, useState } from 'react';
import { BRAND_URL, DOWNLOAD_APP_HREF, GET_IN_TOUCH_HREF } from '../../constants/routes';
import { YAKA_ASSETS } from '../../constants/yakaAssets';
import useTheme, { withThemeParam } from '../../hooks/useTheme';
import { useScrollHandoffProgress } from '../ScrollHandoff/ScrollHandoff';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

const CORPORATE_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Technology', href: '#technology' },
  { label: 'Our Partners', href: '#our-partners' },
  { label: 'News', href: '#news' },
];

const CORPORATE_SECTION_IDS = CORPORATE_LINKS.map((link) => link.href.slice(1));

function getActiveCorporateHref() {
  const offset = 120;
  let current = CORPORATE_SECTION_IDS[0];

  CORPORATE_SECTION_IDS.forEach((id) => {
    const section = document.getElementById(id);
    if (section && section.getBoundingClientRect().top <= offset) {
      current = id;
    }
  });

  return `#${current}`;
}

function Logo() {
  return (
    <a href="/" className="header__logo" aria-label="eatskart home">
      <img
        src="/images/eatskart-logo.png"
        alt="eatskart"
        className="header__logo-img"
        width={127}
        height={35}
      />
    </a>
  );
}

function LocationPin() {
  return (
    <svg className="header__pin" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        className="header__pin-fill"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function Header({ theme = 'default', variant = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeHref, setActiveHref] = useState(CORPORATE_LINKS[0].href);
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const isCorporate = variant === 'corporate';
  const isHomeHero = theme === 'hero' && !isCorporate;
  const { theme: colorTheme, toggleTheme: toggleColorTheme } = useTheme();
  const handoffProgress = useScrollHandoffProgress();
  const navYakaOpacity = isHomeHero
    ? isPhone
      ? 1
      : Math.min(1, Math.max(0, (handoffProgress - 0.85) / 0.15))
    : 0;
  const navYakaLanded = navYakaOpacity > 0.92;

  useEffect(() => {
    const navMedia = window.matchMedia('(max-width: 1024px)');
    const phoneMedia = window.matchMedia('(max-width: 767px)');
    const update = () => {
      setIsMobileNav(navMedia.matches);
      setIsPhone(phoneMedia.matches);
    };
    update();
    navMedia.addEventListener('change', update);
    phoneMedia.addEventListener('change', update);
    return () => {
      navMedia.removeEventListener('change', update);
      phoneMedia.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrolled(scrollTop > 20);
      setProgress(height > 0 ? scrollTop / height : 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isCorporate) return undefined;

    const updateActive = () => setActiveHref(getActiveCorporateHref());
    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [isCorporate]);

  const closeMenu = () => setMenuOpen(false);

  const className = [
    'header',
    theme === 'hero' ? 'header--hero' : '',
    scrolled ? 'header--scrolled' : '',
    menuOpen ? 'header--menu-open' : '',
    isCorporate ? 'header--corporate' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={className}>
      <div
        className="header__progress"
        style={{ transform: `scaleX(${progress})` }}
      />
      <button
        type="button"
        className={`header__backdrop${menuOpen ? ' header__backdrop--visible' : ''}`}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />
      <div className="container header__inner">
        <Logo />

        <nav
          className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}
          aria-hidden={isMobileNav ? !menuOpen : undefined}
        >
          <div className="header__drawer-top">
            <p className="header__drawer-label">Menu</p>
            <button
              type="button"
              className="header__drawer-close"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {isCorporate ? (
            <>
              <div className="header__links">
                {CORPORATE_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`header__nav-link${activeHref === link.href ? " header__nav-link--active" : ""}`}
                    onClick={() => {
                      setActiveHref(link.href);
                      closeMenu();
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="header__cta">
                <a
                  href={DOWNLOAD_APP_HREF}
                  className="header__btn header__btn--solid"
                  onClick={closeMenu}
                >
                  Download App
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="header__links">
                {isHomeHero ? (
                  <a
                    href={GET_IN_TOUCH_HREF}
                    className="header__location"
                    onClick={closeMenu}
                  >
                    <LocationPin />
                    <span>South bopal</span>
                    <svg
                      className="header__chevron"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ) : null}
                <ThemeToggle theme={colorTheme} toggleTheme={toggleColorTheme} />
              </div>
              <div className="header__cta">
                {isHomeHero ? (
                  <a
                    href={GET_IN_TOUCH_HREF}
                    className="header__btn header__btn--solid header__btn--get-in-touch"
                    onClick={closeMenu}
                  >
                    Get In Touch
                  </a>
                ) : (
                  <a
                    href={DOWNLOAD_APP_HREF}
                    className="header__btn header__btn--solid header__btn--get-in-touch"
                    onClick={closeMenu}
                  >
                    Download App
                  </a>
                )}
                {isHomeHero && !isMobileNav ? (
                  <a
                    id="yaka-nav-anchor"
                    href={withThemeParam(BRAND_URL, colorTheme)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="A YAKA Brand"
                    className={`header__yaka${navYakaLanded ? ' header__yaka--landed' : ''}`}
                    style={{
                      opacity: navYakaOpacity,
                      pointerEvents: navYakaLanded ? 'auto' : 'none',
                    }}
                  >
                    <span data-yaka-icon className="header__yaka-icon" aria-hidden="true">
                      <img
                        src={YAKA_ASSETS.icon}
                        alt=""
                        className="header__yaka-img"
                        width={573}
                        height={512}
                        decoding="async"
                        draggable={false}
                      />
                    </span>
                  </a>
                ) : null}
                {!isHomeHero ? (
                  <a
                    href={withThemeParam(BRAND_URL, colorTheme)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="A YAKA Brand"
                    className="header__yaka header__yaka--landed"
                  >
                    <span data-yaka-icon className="header__yaka-icon" aria-hidden="true">
                      <img
                        src={colorTheme === 'dark' ? YAKA_ASSETS.icon : '/images/Vector (1).png'}
                        alt=""
                        className={`header__yaka-img${colorTheme === 'dark' ? '' : ' header__yaka-img--natural'}`}
                        width={573}
                        height={512}
                        decoding="async"
                        draggable={false}
                      />
                    </span>
                  </a>
                ) : null}
              </div>
            </>
          )}
        </nav>

        <div className="header__actions">
          {isHomeHero ? (
            <a
              id={isMobileNav ? 'yaka-nav-anchor' : undefined}
              href={withThemeParam(BRAND_URL, colorTheme)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A YAKA Brand"
              className={`header__yaka header__yaka--mobile${navYakaLanded ? ' header__yaka--landed' : ''}`}
              style={{
                opacity: navYakaOpacity,
                pointerEvents: navYakaLanded || isPhone ? 'auto' : 'none',
              }}
            >
              <span data-yaka-icon className="header__yaka-icon" aria-hidden="true">
                <img
                  src={YAKA_ASSETS.icon}
                  alt=""
                  className="header__yaka-img"
                  width={573}
                  height={512}
                  decoding="async"
                  draggable={false}
                />
              </span>
            </a>
          ) : null}
          {!isHomeHero && !isCorporate ? (
            <a
              href={withThemeParam(BRAND_URL, colorTheme)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="A YAKA Brand"
              className="header__yaka header__yaka--mobile header__yaka--landed"
            >
              <span data-yaka-icon className="header__yaka-icon" aria-hidden="true">
                <img
                  src={colorTheme === 'dark' ? YAKA_ASSETS.icon : '/images/Vector (1).png'}
                  alt=""
                  className={`header__yaka-img${colorTheme === 'dark' ? '' : ' header__yaka-img--natural'}`}
                  width={573}
                  height={512}
                  decoding="async"
                  draggable={false}
                />
              </span>
            </a>
          ) : null}
          {!isCorporate ? <ThemeToggle theme={colorTheme} toggleTheme={toggleColorTheme} /> : null}
          <button
            type="button"
            className="header__hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={(event) => {
              event.stopPropagation();
              setMenuOpen((open) => !open);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
