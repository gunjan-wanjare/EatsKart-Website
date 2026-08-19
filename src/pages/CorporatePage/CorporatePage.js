import { useEffect } from "react";
import Preloader from "../../components/Preloader/Preloader";
import Header from "../../components/Header/Header";
import CorporateBanner from "../../components/CorporateBanner/CorporateBanner";
import AboutEatsKart from "../../components/AboutEatsKart/AboutEatsKart";
import VisionMission from "../../components/VisionMission/VisionMission";
import CorporateStats from "../../components/CorporateStats/CorporateStats";
import Timeline from "../../components/Timeline/Timeline";
import TheEngine from "../../components/TheEngine/TheEngine";
import DeliveringForEveryone from "../../components/DeliveringForEveryone/DeliveringForEveryone";
import Insights from "../../components/Insights/Insights";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import AppPromo from "../../components/AppPromo/AppPromo";
import Footer from "../../components/Footer/Footer";
import ComingSoonModal from "../../components/ComingSoonModal/ComingSoonModal";
import LegalModal from "../../components/LegalModal/LegalModal";
import useComingSoonLinks from "../../hooks/useComingSoonLinks";
import useLegalModal from "../../hooks/useLegalModal";

const DEFAULT_TITLE = "eatskart — Cravings Don't Wait";

function CorporatePage() {
  const { isOpen, pageName, closeModal } = useComingSoonLinks();
  const { activePage, closeLegal } = useLegalModal();

  useEffect(() => {
    document.title = "Corporate — eatskart";
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, []);

  return (
    <div className="app" id="top">
      <Preloader />
      <Header variant="corporate" />
      <main>
        <CorporateBanner />
        <AboutEatsKart />
        <VisionMission />
        <CorporateStats />
        <Timeline />
        <TheEngine />
        <DeliveringForEveryone />
        <Insights />
        <GetInTouch />
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
  );
}

export default CorporatePage;
