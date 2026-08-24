import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import Footer from '../../components/Footer/Footer';
import ComingSoonModal from '../../components/ComingSoonModal/ComingSoonModal';
import LegalModal from '../../components/LegalModal/LegalModal';
import useComingSoonLinks from '../../hooks/useComingSoonLinks';
import useLegalModal from '../../hooks/useLegalModal';

const DEFAULT_TITLE = "eatskart — Cravings Don't Wait";

function GetInTouchPage() {
  const { isOpen, pageName, closeModal } = useComingSoonLinks();
  const { activePage, closeLegal } = useLegalModal();

  useEffect(() => {
    document.title = 'Get in Touch — eatskart';
    window.scrollTo(0, 0);
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, []);

  return (
    <div className="app" id="top">
      <Header />
      <main>
        <GetInTouch />
        <Footer />
      </main>
      <ComingSoonModal isOpen={isOpen} pageName={pageName} onClose={closeModal} />
      <LegalModal activePage={activePage} onClose={closeLegal} />
    </div>
  );
}

export default GetInTouchPage;
