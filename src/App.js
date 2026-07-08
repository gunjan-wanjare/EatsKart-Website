import Preloader from './components/Preloader/Preloader';
import BrandMark from './components/BrandMark/BrandMark';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Restaurants from './components/Restaurants/Restaurants';
import AppPromo from './components/AppPromo/AppPromo';
import Footer from './components/Footer/Footer';
import ComingSoonModal from './components/ComingSoonModal/ComingSoonModal';
import LegalModal from './components/LegalModal/LegalModal';
import useComingSoonLinks from './hooks/useComingSoonLinks';
import useLegalModal from './hooks/useLegalModal';
import './App.css';

function App() {
  const { isOpen, pageName, closeModal } = useComingSoonLinks();
  const { activePage, closeLegal } = useLegalModal();

  return (
    <div className="app">
      <Preloader />
      <Header />
      <BrandMark />
      <main>
        <Home />
        <Restaurants />
        <div className="promo-footer">
          <AppPromo />
          <Footer />
        </div>
      </main>
      <ComingSoonModal isOpen={isOpen} pageName={pageName} onClose={closeModal} />
      <LegalModal activePage={activePage} onClose={closeLegal} />
    </div>
  );
}

export default App;
