import { useEffect, useState } from 'react';
import { CORPORATE_PATH } from '../../constants/routes';
import './Header.css';

const CORPORATE_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Technology', href: '#technology' },
  { label: 'Our Partners', href: '#our-partners' },
  { label: 'News', href: '#news' },
];

const CORPORATE_SECTION_IDS = CORPORATE_LINKS.map((link) => link.href.slice(1));

function getActiveCorporateHref() {
  const offset = 100;
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
    <a href="/" className="header__logo" aria-label="EatsKart home">
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
  const isCorporate = variant === 'corporate';

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1024px)');
    const update = () => setIsMobileNav(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
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
                  href="#app-promo"
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
                <a
                  href="#location"
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
              </div>
              <div className="header__cta">
                <a
                  href={CORPORATE_PATH}
                  className="header__btn header__btn--ghost"
                  onClick={closeMenu}
                >
                  Corporate
                </a>
                <a
                  href="#partner-with-us"
                  className="header__btn header__btn--solid"
                  onClick={closeMenu}
                >
                  Sign in
                </a>
              </div>
            </>
          )}
        </nav>

        <div className="header__actions">
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
