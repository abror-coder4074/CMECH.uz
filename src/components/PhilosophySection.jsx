import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const PhilosophySection = () => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
        uz: "Tashqaridagi -20°C sovuq yoki +45°C jazlama issiq xonangiz halovatiga ta'sir qila olmaydi. Yevropa Thermo-Break texnologiyasi energiyani maksimal tejaydi.",
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

  // Auto-play interval (sichqoncha ustida bo'lmasa 5s da o'zgaradi)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  return (
    <section id="philosophy" className="relative py-28 bg-[var(--color-cmech-dark)] text-[var(--color-cmech-text)] border-t border-[var(--color-cmech-gold)]/10 overflow-hidden selection:bg-[var(--color-cmech-gold)] selection:text-[var(--color-cmech-dark)]">
      
      {/* GLOW DECORATIONS */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[var(--color-cmech-gold)]/5 rounded-full blur-[180px] pointer-events-none animate-pulse duration-10000" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[var(--color-cmech-gold)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-3 mb-4">
              <span className="h-[1px] w-8 bg-[var(--color-cmech-gold)]"></span>
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-cmech-gold)] font-semibold">
                {t.philosophy?.tag || "PHILOSOPHY OF SPACE"}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-wide leading-tight">
              {t.philosophy?.title || "Falsafamiz"} <br />
              <span className="italic font-light text-[var(--color-cmech-gold)] drop-shadow-[0_4px_15px_rgba(225,147,30,0.2)]">
                {t.philosophy?.subtitle || "Mukammallik sari"}
              </span>
            </h2>
          </div>

          {/* DYNAMIC COUNTER */}
          <div className="text-xs text-[var(--color-cmech-gold)] font-mono tracking-widest uppercase bg-white/5 border border-[var(--color-cmech-gold)]/20 px-4 py-2 rounded-full self-start md:self-auto backdrop-blur-md">
            [ <span className="font-bold text-white">0{activeTab + 1}</span> / 03 ]
          </div>
        </div>

        {/* INTERACTIVE SPLIT SHOWCASE */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-24"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* LEFT: HIGH-END DYNAMIC IMAGE DISPLAY (7 COLS) */}
          <div className="lg:col-span-7 relative min-h-[420px] sm:min-h-[520px] rounded-lg overflow-hidden border border-[var(--color-cmech-gold)]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
            
            {slides.map((slide, idx) => (
              <div 
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  activeTab === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 pointer-events-none z-0'
                }`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title[lang]} 
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cmech-dark)] via-[var(--color-cmech-dark)]/20 to-black/30" />
                
                {/* CAPTION BADGE */}
                <div className="absolute bottom-8 left-6 right-6 sm:left-8 sm:right-8 z-20 flex justify-between items-end">
                  <div className="bg-[var(--color-cmech-dark)]/85 backdrop-blur-xl border border-[var(--color-cmech-gold)]/40 p-6 rounded-lg max-w-sm shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-cmech-gold)] font-bold block mb-1">
                      {slide.subtitle[lang]}
                    </span>
                    <h4 className="font-serif text-xl text-white font-normal">
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
                  className={`relative overflow-hidden p-6 sm:p-7 rounded-lg border transition-all duration-500 cursor-pointer ${
                    isActive 
                      ? 'bg-gradient-to-r from-white/[0.06] to-white/[0.02] border-[var(--color-cmech-gold)] shadow-[0_10px_30px_rgba(225,147,30,0.15)] translate-x-2' 
                      : 'bg-transparent border-white/5 hover:border-[var(--color-cmech-gold)]/30 opacity-60 hover:opacity-100'
                  }`}
                >
                  {/* PROGRESS BAR FOR ACTIVE TAB */}
                  {isActive && !isHovered && (
                    <div className="absolute bottom-0 left-0 h-[2px] bg-[var(--color-cmech-gold)] animate-progress" />
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-serif text-xl ${isActive ? 'text-[var(--color-cmech-gold)] font-bold' : 'text-white/40'}`}>
                      {slide.id}
                    </span>
                    <span className={`text-[10px] uppercase tracking-[0.2em] px-3.5 py-1 rounded-full border transition-all duration-300 ${
                      isActive ? 'border-[var(--color-cmech-gold)] bg-[var(--color-cmech-gold)]/10 text-[var(--color-cmech-gold)] font-semibold' : 'border-white/10 text-white/40'
                    }`}>
                      {isActive ? 'Active' : 'Select'}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-white tracking-wide">
                    {slide.title[lang]}
                  </h3>

                  {/* ULTRA-SMOOTH HEIGHT ANIMATION */}
                  <div 
                    className={`grid transition-all duration-500 ease-in-out ${
                      isActive ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs leading-relaxed font-light text-[var(--color-cmech-text)]/85">
                        {slide.desc[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* LUXURY METRIC STRIP */}
        <div className="border-t border-[var(--color-cmech-gold)]/15 pt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          
          <div className="p-6 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[var(--color-cmech-gold)]/30 transition-all duration-500 hover:-translate-y-1 group">
            <div className="font-serif text-3xl sm:text-5xl text-[var(--color-cmech-gold)] font-light mb-2 group-hover:scale-105 transition-transform duration-300">
              0.8 <span className="text-xs font-sans text-white/60">W/m²K</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-cmech-text)]/70 font-medium">
              {t.philosophy?.metric1 || "TERMİK IZOLYATSIYA"}
            </div>
          </div>

          <div className="p-6 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[var(--color-cmech-gold)]/30 transition-all duration-500 hover:-translate-y-1 group">
            <div className="font-serif text-3xl sm:text-5xl text-[var(--color-cmech-gold)] font-light mb-2 group-hover:scale-105 transition-transform duration-300">
              48 <span className="text-xs font-sans text-white/60">dB</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-cmech-text)]/70 font-medium">
              {t.philosophy?.metric2 || "AKUSTIK SHUMIZOLYATSIYA"}
            </div>
          </div>

          <div className="p-6 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[var(--color-cmech-gold)]/30 transition-all duration-500 hover:-translate-y-1 group">
            <div className="font-serif text-3xl sm:text-5xl text-[var(--color-cmech-gold)] font-light mb-2 group-hover:scale-105 transition-transform duration-300">
              Class 4
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-cmech-text)]/70 font-medium">
              {t.philosophy?.metric3 || "GERMETIKLIK ZIRHI"}
            </div>
          </div>

          <div className="p-6 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[var(--color-cmech-gold)]/30 transition-all duration-500 hover:-translate-y-1 group">
            <div className="font-serif text-3xl sm:text-5xl text-[var(--color-cmech-gold)] font-light mb-2 group-hover:scale-105 transition-transform duration-300">
              50+ <span className="text-xs font-sans text-white/60">Years</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-cmech-text)]/70 font-medium">
              {t.philosophy?.metric4 || "XIZMAT MUDDATI"}
            </div>
          </div>

        </div>

      </div>

      {/* INJECTED ANIMATIONS */}
      <style jsx>{`
        @keyframes progressBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progressBar 5.5s linear forwards;
        }
      `}</style>
    </section>
  );
};

export default PhilosophySection;