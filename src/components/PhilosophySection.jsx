import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const PhilosophySection = () => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  // Falsafa slaydlari va ularning har biriga mos luxury vizual rasmlar
  const slides = [
    {
      id: "01",
      title: {
        uz: "Panoramik Ergonomika",
        ru: "Панорамная Эргономика",
        en: "Panoramic Ergonomics"
      },
      subtitle: {
        uz: "Chegara bilmas arxitektura",
        ru: "Архитектура без границ",
        en: "Architecture without borders"
      },
      desc: {
        uz: "Cmech ramkalari devor ichiga deyarli yashirinadi. Bu xonani tashqi tabiat va quyosh nuri bilan bir butunga aylantirib, chegara tuyg'usini yo'qotadi.",
        ru: "Рамы Cmech практически скрываются в стенах. Это объединяет интерьер с окружающим пейзажем, создавая ощущение абсолютной свободы.",
        en: "Cmech frames seamlessly merge into the architecture, dissolving boundaries between luxury interior and the surrounding landscape."
      },
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "02",
      title: {
        uz: "Termik Zirh",
        ru: "Термическая Броня",
        en: "Thermal Armor"
      },
      subtitle: {
        uz: "Mukammal mikroklimat",
        ru: "Идеальный микроклимат",
        en: "Ideal Microclimate"
      },
      desc: {
        uz: "Tashqaridagi -20°C sovuq yoki +45°C jazlama issiq xonangiz halovatiga ta'sir qila olmaydi. Nemis Thermo-Break texnologiyasi energiyani maksimal tejaydi.",
        ru: "Мороз -20°C или зной +45°C не нарушат уют вашего дома. Технология Thermo-Break обеспечивает максимальное энергосбережение.",
        en: "Extreme temperatures outside stay outside. High-tech Thermo-Break barriers guarantee peak energy efficiency year-round."
      },
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "03",
      title: {
        uz: "Akustik Sukunat",
        ru: "Акустическая Тишина",
        en: "Acoustic Silence"
      },
      subtitle: {
        uz: "Megalopolis ichidagi sokinlik",
        ru: "Тишина внутри мегаполиса",
        en: "Silence inside the Metropolis"
      },
      desc: {
        uz: "Shahar shovqini, tirbandlik va shamol uvillashi tabaqa yopilishi bilan bir soniyada yo'qoladi. 48 dB ovoz izolyatsiyasi sizga mutlaq tinchlik beradi.",
        ru: "Шум города и гул ветра исчезают в секунду закрытия створки. Шумоизоляция 48 дБ дарит вам абсолютное умиротворение.",
        en: "City traffic and storm winds vanish the moment the door glides shut. 48 dB sound reduction ensures absolute serenity."
      },
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80"
    }
  ];

  return (
    <section id="philosophy" className="relative py-28 bg-[var(--color-cmech-dark)] text-[var(--color-cmech-text)] border-t border-[var(--color-cmech-gold)]/10 overflow-hidden">
      
      {/* GLOW DECORATION */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[var(--color-cmech-gold)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-3 mb-4">
              <span className="h-[1px] w-8 bg-[var(--color-cmech-gold)]"></span>
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-cmech-gold)] font-medium">
                {t.philosophy.tag}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-wide leading-tight">
              {t.philosophy.title} <br />
              <span className="italic font-light text-[var(--color-cmech-gold)]">{t.philosophy.subtitle}</span>
            </h2>
          </div>

          <div className="text-xs text-[var(--color-cmech-text)]/50 tracking-widest uppercase font-mono">
            [ 0{activeTab + 1} / 03 ]
          </div>
        </div>

        {/* INTERACTIVE SPLIT SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-24">
          
          {/* LEFT: HIGH-END DYNAMIC IMAGE DISPLAY (7 COLS) */}
          <div className="lg:col-span-7 relative min-h-[400px] sm:min-h-[500px] rounded-sm overflow-hidden border border-[var(--color-cmech-gold)]/20 shadow-2xl group">
            
            {slides.map((slide, idx) => (
              <div 
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  activeTab === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title[lang]} 
                  className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cmech-dark)] via-transparent to-black/30" />
                
                {/* CAPTION BADGE */}
                <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                  <div className="bg-[var(--color-cmech-dark)]/80 backdrop-blur-md border border-[var(--color-cmech-gold)]/30 p-5 rounded-sm max-w-sm">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-cmech-gold)] font-semibold block mb-1">
                      {slide.subtitle[lang]}
                    </span>
                    <h4 className="font-serif text-lg text-white font-normal">
                      {slide.title[lang]}
                    </h4>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* RIGHT: INTERACTIVE ACCORDION / TABS (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            {slides.map((slide, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={slide.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-7 rounded-sm border transition-all duration-500 cursor-pointer ${
                    isActive 
                      ? 'bg-white/[0.03] border-[var(--color-cmech-gold)] shadow-xl translate-x-2' 
                      : 'bg-transparent border-white/5 hover:border-[var(--color-cmech-gold)]/30 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-serif text-xl ${isActive ? 'text-[var(--color-cmech-gold)] font-bold' : 'text-white/40'}`}>
                      {slide.id}
                    </span>
                    <span className={`text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${
                      isActive ? 'border-[var(--color-cmech-gold)]/40 text-[var(--color-cmech-gold)]' : 'border-white/10 text-white/40'
                    }`}>
                      {isActive ? 'Active' : 'Select'}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-white mb-2 tracking-wide">
                    {slide.title[lang]}
                  </h3>

                  <p className={`text-xs leading-relaxed font-light transition-all duration-300 ${
                    isActive ? 'text-[var(--color-cmech-text)]/80 max-h-40 mt-3 opacity-100' : 'text-transparent max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    {slide.desc[lang]}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* LUXURY METRIC STRIP */}
        <div className="border-t border-[var(--color-cmech-gold)]/15 pt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-4 border-r border-white/5 last:border-none">
            <div className="font-serif text-3xl sm:text-5xl text-[var(--color-cmech-gold)] font-light mb-2">0.8 <span className="text-sm font-sans">W/m²K</span></div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-cmech-text)]/60">{t.philosophy.metric1}</div>
          </div>
          <div className="p-4 border-r border-white/5 last:border-none">
            <div className="font-serif text-3xl sm:text-5xl text-[var(--color-cmech-gold)] font-light mb-2">48 <span className="text-sm font-sans">dB</span></div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-cmech-text)]/60">{t.philosophy.metric2}</div>
          </div>
          <div className="p-4 border-r border-white/5 last:border-none">
            <div className="font-serif text-3xl sm:text-5xl text-[var(--color-cmech-gold)] font-light mb-2">Class 4</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-cmech-text)]/60">{t.philosophy.metric3}</div>
          </div>
          <div className="p-4">
            <div className="font-serif text-3xl sm:text-5xl text-[var(--color-cmech-gold)] font-light mb-2">50+ <span className="text-sm font-sans">Years</span></div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-cmech-text)]/60">{t.philosophy.metric4}</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;