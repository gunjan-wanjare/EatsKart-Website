import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Restaurants from './components/Restaurants/Restaurants';
import AppPromo from './components/AppPromo/AppPromo';
import Footer from './components/Footer/Footer';
import ComingSoonModal from './components/ComingSoonModal/ComingSoonModal';
import useComingSoonLinks from './hooks/useComingSoonLinks';
import './App.css';

function App() {
  const { isOpen, pageName, closeModal } = useComingSoonLinks();

  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <Restaurants />
        <AppPromo />
      </main>
      <Footer />
      <ComingSoonModal isOpen={isOpen} pageName={pageName} onClose={closeModal} />
    </div>
  );
}

export default App;
