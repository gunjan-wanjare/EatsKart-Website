import './Footer.css';

const companyLinks = ['Restaurants', 'Popular Areas', 'Offers & Deals', 'New Arrivals'];
const supportLinks = ['Help Center', 'Partner With Us', 'Contact Us', 'Careers'];

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="/" className="footer__logo" aria-label="EatsKart home">
            <img src="/images/eatskart-logo.png" alt="eatskart" className="footer__logo-img" />
          </a>
          <p className="footer__desc">
            EatsKart connects you with the best local restaurants and delivers your favourite meals right to your doorstep.
          </p>
          <div className="footer__social">
            <a href="#instagram" aria-label="Instagram">
              <img src="/instagram.png" alt="" />
            </a>
            <a href="#facebook" aria-label="Facebook">
              <img src="/facebook.png" alt="" />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Company</h4>
          <ul className="footer__links">
            {companyLinks.map((link) => (
              <li key={link}><a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Support</h4>
          <ul className="footer__links">
            {supportLinks.map((link) => (
              <li key={link}><a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__contact">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__contact-list">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span>123 Main Road, South bopal, Ahmedabad, Gujarat 380058</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 4h16v16H4V4z" stroke="currentColor" strokeWidth="2" />
                <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <a href="mailto:info@eatskart.com">info@eatskart.com</a>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" />
              </svg>
              <a href="tel:+919876543210">+91 9876543210</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p className="footer__copy">&copy; 2024 eatskart. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
