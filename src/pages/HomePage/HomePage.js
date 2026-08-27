import { useCallback, useEffect, useRef, useState } from 'react';
import Preloader from '../../components/Preloader/Preloader';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import Restaurants from '../../components/Restaurants/Restaurants';
import AppPromo from '../../components/AppPromo/AppPromo';
import Footer from '../../components/Footer/Footer';
import ComingSoonModal from '../../components/ComingSoonModal/ComingSoonModal';
import LegalModal from '../../components/LegalModal/LegalModal';
import FloatingLogo from '../../components/FloatingLogo/FloatingLogo';
import { IntroContext } from '../../components/Intro/IntroContext';
import useComingSoonLinks from '../../hooks/useComingSoonLinks';
import useLegalModal from '../../hooks/useLegalModal';
import {
  getInitialIntroPhase,
  markHomeIntroCompleted,
} from '../../lib/homeIntro';

function HomePage() {
  const { isOpen, pageName, closeModal } = useComingSoonLinks();
  const { activePage, closeLegal } = useLegalModal();
  const [phase, setPhase] = useState(() => getInitialIntroPhase());
  const loaderDoneRef = useRef(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (phase === 'loading') {
      window.scrollTo(0, 0);
    }
  }, [phase]);

  const handleLoaderComplete = useCallback(() => {
    if (loaderDoneRef.current) return;
    loaderDoneRef.current = true;
    setPhase('flying');
  }, []);

  const handleIntroComplete = useCallback(() => {
    markHomeIntroCompleted();
    setPhase('ready');
  }, []);

  const showIntro = phase !== 'ready';

  return (
    <IntroContext.Provider value={{ phase }}>
      <div className="app" id="top">
        {showIntro && phase === 'loading' ? (
          <Preloader onComplete={handleLoaderComplete} />
        ) : null}

        {showIntro && phase === 'flying' ? (
          <FloatingLogo phase={phase} onIntroComplete={handleIntroComplete} />
        ) : null}

        <Header theme="hero" />
        <main>
          <Home />
          <Restaurants />
          <div className="promo-footer">
            <AppPromo />
            <Footer />
          </div>
        </main>
        <ComingSoonModal
          isOpen={isOpen}
          pageName={pageName}
          onClose={closeModal}
        />
        <LegalModal activePage={activePage} onClose={closeLegal} />
      </div>
    </IntroContext.Provider>
  );
}

export default HomePage;
