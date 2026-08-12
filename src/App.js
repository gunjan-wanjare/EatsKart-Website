import HomePage from './pages/HomePage/HomePage';
import LegalStandalone from './pages/legal/LegalStandalone';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';
import ContactPage from './pages/ContactPage/ContactPage';
import { CONTACT_PATH, LEGAL_PATHS } from './constants/routes';
import './App.css';

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === LEGAL_PATHS['privacy-policy']) {
    return <LegalStandalone Page={PrivacyPolicy} title="Privacy Policy" />;
  }

  if (path === LEGAL_PATHS['terms-and-conditions']) {
    return <LegalStandalone Page={TermsAndConditions} title="Terms & Conditions" />;
  }

  if (path === LEGAL_PATHS['refund-policy']) {
    return <LegalStandalone Page={RefundPolicy} title="Refund Policy" />;
  }

  if (path === CONTACT_PATH) {
    return <LegalStandalone Page={ContactPage} title="Contact Us" />;
  }

  return <HomePage />;
}

export default App;
