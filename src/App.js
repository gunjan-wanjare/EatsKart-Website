import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import CorporatePage from './pages/CorporatePage/CorporatePage';
import LegalStandalone from './pages/legal/LegalStandalone';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';
import { LEGAL_PATHS, CORPORATE_PATH } from './constants/routes';
import { getPath, isAppPath, navigate, scrollToHash } from './utils/navigate';
import './App.css';

function App() {
  const [locationKey, setLocationKey] = useState(
    () => `${getPath()}${window.location.hash}`
  );

  useEffect(() => {
    const onPopState = () => setLocationKey(`${getPath()}${window.location.hash}`);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = event.target.closest('a');
      if (!anchor || anchor.target === '_blank') return;

      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }
      if (/^https?:\/\//i.test(href)) return;

      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      if (!isAppPath(url.pathname)) return;

      event.preventDefault();
      navigate(`${url.pathname}${url.search}${url.hash}`);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    const path = getPath();
    const hash = window.location.hash;

    if ((path === '/' || path === CORPORATE_PATH) && hash) {
      scrollToHash(hash);
      return;
    }

    window.scrollTo(0, 0);
  }, [locationKey]);

  const path = getPath();

  if (path === LEGAL_PATHS['privacy-policy']) {
    return <LegalStandalone Page={PrivacyPolicy} title="Privacy Policy" />;
  }

  if (path === LEGAL_PATHS['terms-and-conditions']) {
    return <LegalStandalone Page={TermsAndConditions} title="Terms & Conditions" />;
  }

  if (path === LEGAL_PATHS['refund-policy']) {
    return <LegalStandalone Page={RefundPolicy} title="Refund Policy" />;
  }

  if (path === CORPORATE_PATH) {
    return <CorporatePage />;
  }

  return <HomePage />;
}

export default App;
