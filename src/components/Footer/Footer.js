import './Footer.css';
import { getLegalModalHref, GET_IN_TOUCH_HREF } from '../../constants/routes';

const exploreLinks = [
  { label: 'Restaurants', href: '#restaurants' },
  { label: 'Popular Cuisines', href: '#popular-cuisines' },
  { label: 'Offers & Deals', href: GET_IN_TOUCH_HREF },
  { label: 'New Arrivals', href: GET_IN_TOUCH_HREF },
];

const legalLinks = [
  { label: 'Privacy', modalId: 'privacy-policy' },
  { label: 'Terms', modalId: 'terms-and-conditions' },
  { label: 'Returns', modalId: 'refund-policy' },
  { label: 'Refund Policy', modalId: 'refund-policy' },
];

function PinIcon() {
  return (
    <svg className="footer__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-5.33 7-12a7 7 0 10-14 0c0 6.67 7 12 7 12z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="footer__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__shell">
        <div className="footer__inner">
          <div className="footer__brand">
            <a href="/" className="footer__logo" aria-label="eatskart home">
              <img
                src="/images/footer-pin.png"
                alt=""
                className="footer__logo-img"
                width={48}
                height={58}
              />
            </a>
            <p className="footer__yaka">
              A <strong>YAKA</strong> Brand
            </p>
            <p className="footer__desc">
              Fast delivery. Fresh food. Endless cravings. Discover the best restaurants around you
              with eatskart.
            </p>
          </div>

          <div className="footer__col footer__col--explore">
            <h4 className="footer__heading">Explore</h4>
            <ul className="footer__links">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__col--contact">
            <h4 className="footer__heading">Visit &amp; Contact</h4>
            <ul className="footer__contact-list">
              <li>
                <PinIcon />
                <span className="footer__address">
                  123 Food Street, Jubilee Hills,
                  <br />
                  Hyderabad, Telangana 500033,
                  <br />
                  India
                </span>
              </li>
              <li>
                <MailIcon />
                <a href="mailto:hello@eatskart.com">hello@eatskart.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bar">
          <p className="footer__copy">&copy; 2024 eatskart. All rights reserved.</p>
          <nav className="footer__legal" aria-label="Legal">
            {legalLinks.map((link, index) => (
              <span key={`${link.label}-${index}`} className="footer__legal-item">
                {index > 0 && <span className="footer__legal-sep" aria-hidden="true">·</span>}
                <a href={getLegalModalHref(link.modalId)}>{link.label}</a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
