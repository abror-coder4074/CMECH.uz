import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-[var(--color-cmech-dark)] text-[var(--color-cmech-text)] font-sans overflow-hidden selection:bg-[var(--color-cmech-gold)] selection:text-[var(--color-cmech-dark)]">
      
      {/* ==================== BACKGROUND VIDEO / RENDER (55-65% OVERLAY) ==================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cmech-dark)] via-[var(--color-cmech-dark)]/55 to-[var(--color-cmech-dark)]/35 z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--color-cmech-gold)]/10 rounded-full blur-[160px] z-10" />

        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover object-[75%_center] scale-105 opacity-75 brightness-105 contrast-110 transition-all duration-700"
        >
          <source 
            src="https://cdn.coverr.co/videos/coverr-modern-architectural-building-5633/1080p.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* ==================== HEADER (AYNAN RASMDAGI DIZAYN + UZ / RU / EN) ==================== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-cmech-dark)]/90 backdrop-blur-md border-b border-[var(--color-cmech-gold)]/10">
        
        {/* DESKTOP HEADER */}
        <div className="hidden lg:block max-w-7xl mx-auto px-8">
          
          {/* TOP BAR */}
          <div className="h-20 flex items-center justify-between">
            
            {/* Phone & Work Hours */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-[var(--color-cmech-gold)]/30 flex items-center justify-center text-[var(--color-cmech-gold)]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
                </svg>
              </div>
              <div>
                <a href="tel:+998502070000" className="text-sm font-semibold tracking-wide text-white hover:text-[var(--color-cmech-gold)] transition">
                  +998 (50) 207-00-00
                </a>
                <p className="text-[11px] text-[var(--color-cmech-text)]/60">{t.phoneHours}</p>
              </div>
            </div>

            {/* LOGO */}
            <div className="text-center">
              <a href="#" className="inline-block">
                <span className="font-serif text-4xl tracking-[0.18em] font-bold text-[var(--color-cmech-gold)] drop-shadow-md">
                  CMECH
                </span>
              </a>
            </div>

            {/* LANGUAGE SELECTOR (UZ | RU | EN) & CTA */}
            <div className="flex items-center space-x-6">
              
              {/* UZ | RU | EN SWITCHER */}
              <div className="flex items-center space-x-2 text-xs font-semibold bg-white/5 border border-[var(--color-cmech-gold)]/20 px-3 py-1.5 rounded-full">
                <button 
                  onClick={() => setLang('uz')} 
                  className={`transition-colors ${lang === 'uz' ? 'text-[var(--color-cmech-gold)] font-bold' : 'text-white/60 hover:text-white'}`}
                >
                  UZ
                </button>
                <span className="text-white/20">|</span>
                <button 
                  onClick={() => setLang('ru')} 
                  className={`transition-colors ${lang === 'ru' ? 'text-[var(--color-cmech-gold)] font-bold' : 'text-white/60 hover:text-white'}`}
                >
                  RU
                </button>
                <span className="text-white/20">|</span>
                <button 
                  onClick={() => setLang('en')} 
                  className={`transition-colors ${lang === 'en' ? 'text-[var(--color-cmech-gold)] font-bold' : 'text-white/60 hover:text-white'}`}
                >
                  EN
                </button>
              </div>

              {/* CATALOG BUTTON */}
              <a 
                href="#brochure" 
                className="bg-black border border-[var(--color-cmech-gold)]/40 hover:border-[var(--color-cmech-gold)] text-white text-xs font-medium px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 shadow-md"
              >
                <span>{t.catalogBtn}</span>
                <svg className="w-4 h-4 text-[var(--color-cmech-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>

          </div>

          {/* BOTTOM BAR: NAVIGATION LINKS */}
          <div className="border-t border-white/10 py-3.5 flex justify-center">
            <nav className="flex items-center space-x-10 text-xs uppercase tracking-[0.2em] font-medium text-[var(--color-cmech-text)]/80">
              <a href="#philosophy" className="hover:text-[var(--color-cmech-gold)] transition-colors duration-300">{t.nav.philosophy}</a>
              <a href="#technology" className="hover:text-[var(--color-cmech-gold)] transition-colors duration-300">{t.nav.technology}</a>
              <a href="#systems" className="hover:text-[var(--color-cmech-gold)] transition-colors duration-300">{t.nav.systems}</a>
              <a href="#gallery" className="hover:text-[var(--color-cmech-gold)] transition-colors duration-300">{t.nav.gallery}</a>
              <a href="#contact" className="hover:text-[var(--color-cmech-gold)] transition-colors duration-300">{t.nav.showroom}</a>
            </nav>
          </div>

        </div>

        {/* MOBILE HEADER (RESPONSIVE: LOGO MARKAZDA, QOLGANI BURGERDA) */}
        <div className="lg:hidden h-20 px-6 flex items-center justify-between relative">
          <div className="w-10"></div>
          
          {/* LOGO CENTER */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <a href="#">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.15em] font-bold text-[var(--color-cmech-gold)]">
                CMECH
              </span>
            </a>
          </div>

          {/* BURGER BUTTON */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[var(--color-cmech-gold)] focus:outline-none p-2 border border-[var(--color-cmech-gold)]/20 rounded-md bg-white/5"
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
        <div className="fixed inset-0 z-40 bg-[var(--color-cmech-dark)] flex flex-col justify-between items-center lg:hidden px-8 py-28 text-center animate-fade-in overflow-y-auto">
          
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

          {/* MOBILE LANG SWITCHER & CTA */}
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
              className="w-full bg-black border border-[var(--color-cmech-gold)] text-[var(--color-cmech-gold)] py-3 text-xs uppercase tracking-[0.2em] rounded-full"
            >
              {t.catalogBtn}
            </a>
          </div>

        </div>
      )}

      {/* ==================== MAIN HERO CONTENT ==================== */}
      <section className="relative z-20 pt-56 pb-20 sm:pt-64 sm:pb-32 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-screen">
        
        <div className="inline-flex items-center space-x-3 mb-8 opacity-90">
          <span className="h-[1px] w-8 bg-[var(--color-cmech-gold)]"></span>
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--color-cmech-gold)] font-medium">
            {t.hero.tag}
          </span>
          <span className="h-[1px] w-8 bg-[var(--color-cmech-gold)]"></span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-wide font-normal text-white leading-[1.15] mb-8 drop-shadow-2xl">
          {t.hero.titleLine1} <br className="hidden sm:block"/>
          <span className="italic font-light text-[var(--color-cmech-gold)]">{t.hero.titleLine2}</span>
        </h1>

        <p className="max-w-2xl text-[var(--color-cmech-text)]/90 text-sm sm:text-base leading-relaxed tracking-wide font-light mb-12 drop-shadow-md">
          {t.hero.desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a 
            href="#technology" 
            className="w-full sm:w-auto bg-[var(--color-cmech-gold)] hover:bg-[var(--color-cmech-gold-hover)] text-[var(--color-cmech-dark)] font-semibold text-xs uppercase tracking-[0.2em] px-9 py-4 rounded-full transition-all duration-300 shadow-2xl shadow-[var(--color-cmech-gold)]/20"
          >
            {t.hero.ctaBtn}
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-cmech-text)]">{t.hero.discover}</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[var(--color-cmech-gold)] to-transparent animate-pulse" />
        </div>

      </section>
    </div>
  );
};

export default HeroSection;