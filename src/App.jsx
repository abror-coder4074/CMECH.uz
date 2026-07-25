import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Loader from './components/Loader';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import SystemsSection from './components/SystemsSection';
import CmechConfigurator from './components/CmechConfigurator.jsx';
import TechnologySection from './components/TechnologySection.jsx';
import ShowroomSection from './components/ShowroomSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  // SAHIFA REFRESH BO'LGANDA ENG TEPAGA (HEADERGA) CHIQARISH
  useEffect(() => {
    // Brauzerning avvalgi scroll o'rnini eslab qolishini o'chiramiz
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Har safar sahifa yangilanganda eng tepaga skroll qilamiz
    window.scrollTo(0, 0);
  }, []);

  return (
    <LanguageProvider>
      {/* KIRISH LOADER ANIMATSIYASI */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <div className="bg-[var(--color-cmech-dark)] min-h-screen antialiased selection:bg-[#E1931E] selection:text-[var(--color-cmech-dark)]">
        
        {/* HERO SECTION & HEADER */}
        <HeroSection />

        {/* FALSAFA VA INJINIRING */}
        <PhilosophySection />

        {/* TIZIMLAR VA MODELLAR VITRINASI */}
        <SystemsSection />

        {/* CMECH INTERAKTIV KONFIGURATOR */}
        <CmechConfigurator />

        {/* TEXNOLOGIYA VA INNOVATSIYALAR */}
        <TechnologySection />

        {/* SHOURUM VA BOG'LANISH FORMASI */}
        <ShowroomSection />

        {/* FOOTER */}
        <Footer />

      </div>
    </LanguageProvider>
  );
}

export default App;