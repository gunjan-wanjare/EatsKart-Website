import { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LegalModal from '../../components/LegalModal/LegalModal';
import useLegalModal from '../../hooks/useLegalModal';

const DEFAULT_TITLE = "EatsKart — Cravings Don't Wait";

function LegalStandalone({ Page, title }) {
  const { activePage, closeLegal } = useLegalModal();

  useEffect(() => {
    document.title = `${title} — EatsKart`;
    window.scrollTo(0, 0);

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title]);

  return (
    <div className="app">
      <Header />
      <main>
        <Page />
        <Footer />
      </main>
      <LegalModal activePage={activePage} onClose={closeLegal} />
    </div>
  );
}

export default LegalStandalone;
