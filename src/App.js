import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Restaurants from './components/Restaurants/Restaurants';
import AppPromo from './components/AppPromo/AppPromo';
import Footer from './components/Footer/Footer';
import ComingSoonModal from './components/ComingSoonModal/ComingSoonModal';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';
import useComingSoonLinks from './hooks/useComingSoonLinks';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  const { isOpen, pageName, closeModal } = useComingSoonLinks();

  return (
    <>
      <Header />
      <main>
        <Home />
        <Restaurants />
        <div className="promo-footer">
          <AppPromo />
          <Footer />
        </div>
      </main>
      <ComingSoonModal isOpen={isOpen} pageName={pageName} onClose={closeModal} />
    </>
  );
}

function LegalPageLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
        <Footer />
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/terms-and-conditions"
            element={(
              <LegalPageLayout>
                <TermsAndConditions />
              </LegalPageLayout>
            )}
          />
          <Route
            path="/privacy-policy"
            element={(
              <LegalPageLayout>
                <PrivacyPolicy />
              </LegalPageLayout>
            )}
          />
          <Route
            path="/refund-policy"
            element={(
              <LegalPageLayout>
                <RefundPolicy />
              </LegalPageLayout>
            )}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
