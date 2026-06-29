import './Footer.css';

const exploreLinks = ['Restaurants', 'Popular Cuisines', 'Offers & Deals', 'New Arrivals'];
const companyLinks = ['Corporate', 'Partner With Us', 'Contact Us', 'Careers'];
const legalLinks = ['Shipping', 'Privacy', 'Terms', 'Returns'];

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="/" className="footer__logo" aria-label="EatsKart home">
            <img src="/images/eatskart-logo.png" alt="eatskart" className="footer__logo-img" />
          </a>
          <p className="footer__desc">
            Fast delivery. Fresh food. Endless cravings. Discover the best restaurants around you with EatsKart.
          </p>
          <div className="footer__social">
            <a href="#instagram" className="footer__social-link" aria-label="Instagram">
              <img src="/instagram.png" alt="" />
            </a>
            <a href="#facebook" className="footer__social-link" aria-label="Facebook">
              <img src="/facebook.png" alt="" />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Explore</h4>
          <ul className="footer__links">
            {exploreLinks.map((link) => (
              <li key={link}><a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Company</h4>
          <ul className="footer__links">
            {companyLinks.map((link) => (
              <li key={link}><a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__contact">
          <h4 className="footer__heading">Visit &amp; Contact</h4>
          <ul className="footer__contact-list">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.75" />
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.75" />
              </svg>
              <span>123 Food Street, Jubilee Hills, Hyderabad, Telangana 500033, India</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
                <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
              <a href="mailto:response@eatskart.com">response@eatskart.com</a>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.75" />
              </svg>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p className="footer__copy">&copy; 2026 eatskart. All rights reserved.</p>
          <div className="footer__legal">
            {legalLinks.map((link, index) => (
              <span key={link} className="footer__legal-item">
                {index > 0 && <span className="footer__legal-sep" aria-hidden="true">-</span>}
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
