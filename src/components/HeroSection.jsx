import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // Loading holatini kuzatish
  const { lang, setLang, t } = useLanguage();

  // Sahifa yuklangandan keyin animatsiyalarni ishga tushirish
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Sahifa yuklangach 100ms dan keyin animatsiya boshlanadi
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--color-cmech-dark)] text-[var(--color-cmech-text)] font-sans overflow-hidden selection:bg-[var(--color-cmech-gold)] selection:text-[var(--color-cmech-dark)]">
      
      {/* ==================== BACKGROUND VIDEO / RENDER ==================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cmech-dark)] via-[var(--color-cmech-dark)]/60 to-[var(--color-cmech-dark)]/35 z-10" />
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        {/* AMBIENT GLOW */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--color-cmech-gold)]/15 rounded-full blur-[160px] z-10 animate-pulse duration-[4000ms]" />

        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover object-[75%_center] opacity-75 brightness-105 contrast-110 transition-all duration-1000 scale-105"
        >
          <source 
            src="https://cdn.coverr.co/videos/coverr-modern-architectural-building-5633/1080p.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* ==================== HEADER ==================== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-cmech-dark)]/85 backdrop-blur-xl border-b border-[var(--color-cmech-gold)]/15 transition-all duration-300">
        
        {/* DESKTOP HEADER */}
        <div className="hidden lg:block max-w-7xl mx-auto px-8">
          
          {/* TOP BAR */}
          <div className="h-20 flex items-center justify-between">
            
            {/* Phone & Work Hours */}
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-[var(--color-cmech-gold)]/30 flex items-center justify-center text-[var(--color-cmech-gold)] group-hover:border-[var(--color-cmech-gold)] group-hover:bg-[var(--color-cmech-gold)]/10 transition-all duration-300 shadow-lg">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
                </svg>
              </div>
              <div>
                <a href="tel:+998502070000" className="text-sm font-semibold tracking-wide text-white hover:text-[var(--color-cmech-gold)] transition-colors">
                  +998 (50) 207-00-00
                </a>
                <p className="text-[11px] text-[var(--color-cmech-text)]/60">{t.phoneHours}</p>
              </div>
            </div>

            {/* LOGO */}
            <div className="text-center">
              <a href="#" className="inline-block group">
                <span className="font-serif text-4xl tracking-[0.18em] font-bold text-[var(--color-cmech-gold)] drop-shadow-[0_4px_12px_rgba(225,147,30,0.25)] transition-transform duration-500 group-hover:scale-105 inline-block">
                  CMECH
                </span>
              </a>
            </div>

            {/* LANGUAGE SELECTOR & CTA */}
            <div className="flex items-center space-x-6">
              
              {/* UZ | RU | EN SWITCHER */}
              <div className="flex items-center space-x-2 text-xs font-semibold bg-white/5 border border-[var(--color-cmech-gold)]/20 px-3.5 py-1.5 rounded-full shadow-inner">
                <button 
                  onClick={() => setLang('uz')} 
                  className={`transition-all duration-300 ${lang === 'uz' ? 'text-[var(--color-cmech-gold)] font-bold scale-110' : 'text-white/60 hover:text-white'}`}
                >
                  UZ
                </button>
                <span className="text-white/20">|</span>
                <button 
                  onClick={() => setLang('ru')} 
                  className={`transition-all duration-300 ${lang === 'ru' ? 'text-[var(--color-cmech-gold)] font-bold scale-110' : 'text-white/60 hover:text-white'}`}
                >
                  RU
                </button>
                <span className="text-white/20">|</span>
                <button 
                  onClick={() => setLang('en')} 
                  className={`transition-all duration-300 ${lang === 'en' ? 'text-[var(--color-cmech-gold)] font-bold scale-110' : 'text-white/60 hover:text-white'}`}
                >
                  EN
                </button>
              </div>

              {/* CATALOG BUTTON */}
              <a 
                href="#brochure" 
                className="bg-black/80 border border-[var(--color-cmech-gold)]/40 hover:border-[var(--color-cmech-gold)] text-white text-xs font-medium px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(225,147,30,0.2)] active:scale-95 group"
              >
                <span>{t.catalogBtn}</span>
                <svg className="w-4 h-4 text-[var(--color-cmech-gold)] group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>

          </div>

          {/* BOTTOM BAR: NAVIGATION LINKS WITH ANIMATED UNDERLINE */}
          <div className="border-t border-white/10 py-3.5 flex justify-center">
            <nav className="flex items-center space-x-10 text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-cmech-text)]/80">
              <a href="#philosophy" className="nav-link relative py-1 hover:text-[var(--color-cmech-gold)] transition-colors duration-300">{t.nav.philosophy}</a>
              <a href="#technology" className="nav-link relative py-1 hover:text-[var(--color-cmech-gold)] transition-colors duration-300">{t.nav.technology}</a>
              <a href="#systems" className="nav-link relative py-1 hover:text-[var(--color-cmech-gold)] transition-colors duration-300">{t.nav.systems}</a>
              <a href="#gallery" className="nav-link relative py-1 hover:text-[var(--color-cmech-gold)] transition-colors duration-300">{t.nav.gallery}</a>
              <a href="#contact" className="nav-link relative py-1 hover:text-[var(--color-cmech-gold)] transition-colors duration-300">{t.nav.showroom}</a>
            </nav>
          </div>

        </div>

        {/* MOBILE HEADER */}
        <div className="lg:hidden h-20 px-6 flex items-center justify-between relative">
          <div className="w-10"></div>
          
          <div className="absolute left-1/2 -translate-x-1/2">
            <a href="#">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.15em] font-bold text-[var(--color-cmech-gold)] drop-shadow-sm">
                CMECH
              </span>
            </a>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[var(--color-cmech-gold)] focus:outline-none p-2 border border-[var(--color-cmech-gold)]/30 rounded-lg bg-white/5 active:scale-90 transition-transform"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

      </header>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-cmech-dark)] flex flex-col justify-between items-center lg:hidden px-8 py-28 text-center overflow-y-auto backdrop-blur-2xl">
          
          <div className="flex flex-col items-center space-y-2 mb-4">
            <a href="tel:+998502070000" className="text-lg font-semibold text-white">
              +998 (50) 207-00-00
            </a>
            <span className="text-xs text-[var(--color-cmech-text)]/60">{t.phoneHours}</span>
          </div>

          <nav className="flex flex-col space-y-6 my-6">
            <a onClick={() => setIsMobileMenuOpen(false)} href="#philosophy" className="text-base uppercase tracking-[0.2em] text-[var(--color-cmech-text)] hover:text-[var(--color-cmech-gold)] transition">{t.nav.philosophy}</a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#technology" className="text-base uppercase tracking-[0.2em] text-[var(--color-cmech-text)] hover:text-[var(--color-cmech-gold)] transition">{t.nav.technology}</a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#systems" className="text-base uppercase tracking-[0.2em] text-[var(--color-cmech-text)] hover:text-[var(--color-cmech-gold)] transition">{t.nav.systems}</a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#gallery" className="text-base uppercase tracking-[0.2em] text-[var(--color-cmech-text)] hover:text-[var(--color-cmech-gold)] transition">{t.nav.gallery}</a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#contact" className="text-base uppercase tracking-[0.2em] text-[var(--color-cmech-text)] hover:text-[var(--color-cmech-gold)] transition">{t.nav.showroom}</a>
          </nav>

          <div className="flex flex-col items-center space-y-6 w-full max-w-xs">
            <div className="flex items-center justify-center space-x-4 text-sm text-[var(--color-cmech-text)]/80 bg-white/5 border border-white/10 px-6 py-2 rounded-full">
              <button onClick={() => setLang('uz')} className={lang === 'uz' ? 'text-[var(--color-cmech-gold)] font-bold' : ''}>UZ</button>
              <span>|</span>
              <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'text-[var(--color-cmech-gold)] font-bold' : ''}>RU</button>
              <span>|</span>
              <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-[var(--color-cmech-gold)] font-bold' : ''}>EN</button>
            </div>

            <a 
              onClick={() => setIsMobileMenuOpen(false)} 
              href="#brochure" 
              className="w-full bg-black border border-[var(--color-cmech-gold)] text-[var(--color-cmech-gold)] py-3 text-xs uppercase tracking-[0.2em] rounded-full active:scale-95 transition-transform"
            >
              {t.catalogBtn}
            </a>
          </div>

        </div>
      )}

      {/* ==================== MAIN HERO CONTENT ==================== */}
      <section className="relative z-20 pt-52 pb-20 sm:pt-60 sm:pb-32 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-screen">
        
        {/* 1. TAGLINE (1-Bo'lib ravon ko'tariladi) */}
        <div 
          className={`inline-flex items-center space-x-3 mb-8 transition-all duration-1000 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0 filter blur-0' : 'opacity-0 translate-y-8 filter blur-sm'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <span className="h-[1px] w-8 bg-[var(--color-cmech-gold)]"></span>
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--color-cmech-gold)] font-semibold">
            {t.hero.tag || "EUROPEAN ENGINEERING STANDARDS"}
          </span>
          <span className="h-[1px] w-8 bg-[var(--color-cmech-gold)]"></span>
        </div>

        {/* 2. MAIN TITLE (2-Bo'lib ravon ko'tariladi) */}
        <h1 
          className={`font-serif text-4xl sm:text-6xl lg:text-7xl tracking-wide font-normal text-white leading-[1.18] mb-8 drop-shadow-2xl transition-all duration-1000 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0 filter blur-0' : 'opacity-0 translate-y-10 filter blur-md'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          {t.hero.titleLine1} <br className="hidden sm:block"/>
          <span className="italic font-light text-[var(--color-cmech-gold)] drop-shadow-[0_4px_20px_rgba(225,147,30,0.3)]">{t.hero.titleLine2}</span>
        </h1>

        {/* 3. DESCRIPTION (3-Bo'lib ravon ko'tariladi) */}
        <p 
          className={`max-w-2xl text-[var(--color-cmech-text)]/90 text-sm sm:text-base leading-relaxed tracking-wide font-light mb-12 drop-shadow-md transition-all duration-1000 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0 filter blur-0' : 'opacity-0 translate-y-10 filter blur-md'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          {t.hero.desc}
        </p>

        {/* 4. CTA BUTTON (4-Bo'lib ravon ko'tariladi) */}
        <div 
          className={`flex flex-col sm:flex-row items-center gap-6 transition-all duration-1000 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a 
            href="#technology" 
            className="w-full sm:w-auto bg-[var(--color-cmech-gold)] hover:bg-[#c98016] text-[var(--color-cmech-dark)] font-extrabold text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(225,147,30,0.3)] hover:shadow-[0_15px_40px_rgba(225,147,30,0.5)] hover:-translate-y-0.5 active:scale-95"
          >
            {t.hero.ctaBtn}
          </a>
        </div>

        {/* 5. SCROLL INDICATOR */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-cmech-text)]/80 font-mono">{t.hero.discover}</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[var(--color-cmech-gold)] via-[var(--color-cmech-gold)]/50 to-transparent animate-pulse" />
        </div>

      </section>

      {/* NAV LINK HOVER UNDERLINE */}
      <style jsx>{`
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 1.5px;
          bottom: -2px;
          left: 0;
          background-color: var(--color-cmech-gold);
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 8px var(--color-cmech-gold);
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;