import { useEffect, useState } from 'react';
import { CORPORATE_PATH } from '../../constants/routes';
import './Header.css';

const CORPORATE_LINKS = [
  { label: 'About Us', href: '#about', active: true },
  { label: 'Technology', href: '#technology' },
  { label: 'Our Partners', href: '#our-partners' },
  { label: 'Careers', href: '#careers' },
  { label: 'News', href: '#news' },
];

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

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
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

  const closeMenu = () => setMenuOpen(false);

  const isCorporate = variant === 'corporate';

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
      <div className="container header__inner">
        <Logo />

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {isCorporate ? (
            <>
              <div className="header__links">
                {CORPORATE_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`header__nav-link${link.active ? ' header__nav-link--active' : ''}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="header__cta">
                <a href="#partner-with-us" className="header__btn header__btn--ghost" onClick={closeMenu}>
                  Partner with us
                </a>
                <a href="#app-promo" className="header__btn header__btn--solid" onClick={closeMenu}>
                  Download App
                </a>
              </div>
            </>
          ) : (
            <div className="header__links">
              <a href="#location" className="header__location" onClick={closeMenu}>
                <LocationPin />
                <span>South bopal</span>
                <svg className="header__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href={CORPORATE_PATH} className="header__btn header__btn--ghost" onClick={closeMenu}>
                Corporate
              </a>
              <a href="#partner-with-us" className="header__btn header__btn--solid" onClick={closeMenu}>
                Partner with us
              </a>
            </div>
          )}
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="header__hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
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
