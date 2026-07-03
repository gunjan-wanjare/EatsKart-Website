import './Footer.css';
import { getLegalModalHref, LEGAL_LINKS } from '../../constants/routes';

const exploreLinks = ['Restaurants', 'Popular Cuisines', 'Offers & Deals', 'New Arrivals'];

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="/" className="footer__logo" aria-label="EatsKart home">
            <img src="/images/eatskart-logo.png" alt="eatskart" className="footer__logo-img" />
          </a>
          <p className="footer__tagline">A <strong>YAKA</strong> Brand</p>
          <p className="footer__desc">
            Fast delivery. Fresh food. Endless cravings. Discover the best restaurants around you with EatsKart.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Explore</h4>
          <ul className="footer__links">
            {exploreLinks.map((link) => (
              <li key={link}><a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__contact">
          <h4 className="footer__heading">Visit &amp; Contact</h4>
          <ul className="footer__contact-list">
            <li><span>Sattva Knowledge City, Hi-Tech City, 500081, Telangana, India</span></li>
            <li><a href="mailto:hello@eatskart.com">hello@eatskart.com</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p className="footer__copy">&copy; 2026 eatskart. All rights reserved.</p>
          <div className="footer__legal">
            {LEGAL_LINKS.map((link, index) => (
              <span key={link.label} className="footer__legal-item">
                {index > 0 && <span className="footer__legal-sep" aria-hidden="true">-</span>}
                <a href={getLegalModalHref(link.modalId)}>{link.label}</a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
