import { useEffect, useState } from 'react';
import './Header.css';

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

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Logo />

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

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <button type="button" className="header__location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" className="header__pin-fill" />
              <circle cx="12" cy="9" r="2.5" fill="white" />
            </svg>
            <span>South bopal</span>
            <svg className="header__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="header__links">
            <a href="#careers" className="header__link" onClick={closeMenu}>Careers</a>
            <a href="#contact" className="header__link" onClick={closeMenu}>Contact Us</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
