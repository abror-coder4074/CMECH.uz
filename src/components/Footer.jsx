import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const languageContext = useLanguage();
  const currentLang = languageContext?.lang || languageContext?.language || 'uz';
  const activeLang = String(currentLang).toLowerCase();
  const lang = ['uz', 'ru', 'en'].includes(activeLang) ? activeLang : 'uz';

  const year = new Date().getFullYear();

  // Social linklarni shu yerdan o'zgartirishingiz mumkin:
  const telegramLink = "https://t.me/+3AB_5uA6v1c1ZDBi"; // Telegram kanalingiz manzili
  const instagramLink = "https://www.instagram.com/cmech_uz?utm_source=qr"; // Instagram sahifangiz manzili

  return (
    <footer className="relative bg-[#0D0A08] text-[#E2D8CE] border-t border-[#E1931E]/20 pt-20 pb-10 overflow-hidden">
      
      {/* GLOW DECORATION */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#E1931E]/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E1931E]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* BRAND COL (4 COLS) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-serif font-bold text-white tracking-widest">
                CMECH<span className="text-[#E1931E]">.</span>
              </span>
            </div>

            <p className="text-xs text-[#9E978E] font-light leading-relaxed max-w-sm">
              {lang === 'uz' 
                ? 'Premial alyumin rom va surma tizimlari hamda nemis sifatidagi furnituralarning O\'zbekistondagi rasmiy vakili.' 
                : lang === 'ru' 
                ? 'Официальное представительство премиальных алюминиевых окон, раздвижных систем и немецкой фурнитуры в Узбекистане.' 
                : 'Official representative of premium aluminum window and sliding systems with German precision hardware in Uzbekistan.'}
            </p>

            {/* ISHLAYDIGAN SOCIAL MEDIA BUTTONS */}
            <div className="flex items-center space-x-3 pt-2">
              {/* TELEGRAM */}
              <a 
                href={telegramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 rounded-xl bg-[#1D1714] border border-[#2B231D] flex items-center justify-center text-[#9E978E] hover:text-[#E1931E] hover:border-[#E1931E] hover:bg-[#E1931E]/10 transition-all duration-300 group cursor-pointer active:scale-95"
              >
                <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-2.02 9.52c-.15.68-.56.84-1.13.53l-3.11-2.29-1.5 1.44c-.17.17-.31.31-.63.31l.22-3.17 5.77-5.21c.25-.22-.05-.35-.39-.12l-7.14 4.49-3.07-.96c-.67-.21-.68-.67.14-.99l12.01-4.63c.56-.21 1.05.13.85.89z"/>
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a 
                href={instagramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-[#1D1714] border border-[#2B231D] flex items-center justify-center text-[#9E978E] hover:text-[#E1931E] hover:border-[#E1931E] hover:bg-[#E1931E]/10 transition-all duration-300 group cursor-pointer active:scale-95"
              >
                <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* QUICK LINKS (3 COLS) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-[0.2em] text-[#E1931E] font-semibold">
              {lang === 'uz' ? 'Navigatsiya' : lang === 'ru' ? 'Навигация' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9E978E]">
              <li><a href="#hero" className="hover:text-white transition duration-200">{lang === 'uz' ? 'Bosh sahifa' : lang === 'ru' ? 'Главная' : 'Home'}</a></li>
              <li><a href="#systems" className="hover:text-white transition duration-200">{lang === 'uz' ? 'Tizimlar Katalogi' : lang === 'ru' ? 'Каталог Систем' : 'Systems Catalog'}</a></li>
              <li><a href="#technology" className="hover:text-white transition duration-200">{lang === 'uz' ? 'Texnologiya' : lang === 'ru' ? 'Технологии' : 'Technology'}</a></li>
              <li><a href="#showroom" className="hover:text-white transition duration-200">{lang === 'uz' ? 'Shourum va Manzil' : lang === 'ru' ? 'Шоурум и Адрес' : 'Showroom'}</a></li>
            </ul>
          </div>

          {/* CONTACT INFO (5 COLS) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-[0.2em] text-[#E1931E] font-semibold">
              {lang === 'uz' ? 'Aloqa Markazi' : lang === 'ru' ? 'Контакты' : 'Contact Center'}
            </h4>
            <div className="space-y-3 text-xs text-[#9E978E]">
              <p className="flex items-center space-x-3">
                <span className="text-[#E1931E]">📍</span>
                <span>{lang === 'uz' ? 'Namangan shahri, XPG9+479 binosi' : lang === 'ru' ? 'г. Наманган, здание XPG9+479' : 'Namangan city, XPG9+479 building'}</span>
              </p>
              <p className="flex items-center space-x-3">
                <span className="text-[#E1931E]">📞</span>
                <a href="tel:+998502070000" className="text-white hover:text-[#E1931E] transition font-mono">+998 (50) 207-00-00</a>
              </p>
              <p className="flex items-center space-x-3">
                <span className="text-[#E1931E]">✉️</span>
                <a href="mailto:info@cmech.uz" className="hover:text-white transition font-mono">info@cmech.uz</a>
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#9E978E]/60 space-y-4 sm:space-y-0">
          <p>© {year} CMECH Uzbekistan. {lang === 'uz' ? 'Barcha huquqlar himoyalangan.' : lang === 'ru' ? 'Все права защищены.' : 'All rights reserved.'}</p>
          <p className="font-mono text-[#E1931E]/60">GERMAN ENGINEERING STANDARDS</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;