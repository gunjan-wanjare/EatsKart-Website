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

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <div className="header__links">
            <a href="#contact" className="header__link" onClick={closeMenu}>Contact Us</a>
            <img
              src="/images/yaka-brand-logo.png"
              alt="A YAKA Brand"
              className="header__yaka-brand"
              width={120}
              height={90}
            />
          </div>
        </nav>

        <div className="header__actions">
          <img
            src="/images/yaka-brand-logo.png"
            alt="A YAKA Brand"
            className="header__yaka-brand header__yaka-brand--mobile"
            width={120}
            height={90}
          />
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
