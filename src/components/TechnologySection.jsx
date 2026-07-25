import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const TechnologySection = () => {
  const languageContext = useLanguage();
  const currentLang = languageContext?.lang || languageContext?.language || 'uz';
  const activeLang = String(currentLang).toLowerCase();
  const lang = ['uz', 'ru', 'en'].includes(activeLang) ? activeLang : 'uz';

  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      id: 'precision',
      number: '01',
      title: {
        uz: 'Nemis Aniq Muhandisligi',
        ru: 'Немецкая Точная Инженерия',
        en: 'German Precision Engineering'
      },
      subtitle: {
        uz: 'Mikron darajasidagi aniqlik va silliqlik',
        ru: 'Точность и плавность на уровне микронов',
        en: 'Micron-level accuracy and smoothness'
      },
      desc: {
        uz: 'Har bir mexanizm 0.01 mm aniqlikda ishlanadi va 100,000 martadan ortiq ochib-yopish sikliga sinovdan o\'tkaziladi.',
        ru: 'Каждый механизм обрабатывается с точностью до 0.01 мм и проходит испытания на 100 000+ циклов.',
        en: 'Every mechanism is crafted with 0.01mm precision and tested for over 100,000 opening cycles.'
      },
      metrics: [
        { label: { uz: 'Sinov Sikllari', ru: 'Циклов Тестов', en: 'Test Cycles' }, value: '100,000+' },
        { label: { uz: 'Aniq Chegara', ru: 'Точность', en: 'Precision' }, value: '0.01 mm' },
      ],
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
          <path d="M12 3v3m0 12v3M3 12h3m12 0h3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'thermal',
      number: '02',
      title: {
        uz: 'Termo-Izolyatsiyaning Cho\'qqisi',
        ru: 'Вершина Термоизоляции',
        en: 'Thermal Insulation Peak'
      },
      subtitle: {
        uz: '-30°C dan +60°C gacha bo\'lgan haroratga barosh',
        ru: 'Устойчивость к температурам от -30°C до +60°C',
        en: 'Resilience against extreme temps (-30°C to +60°C)'
      },
      desc: {
        uz: 'Ko\'p kamerali termomostlar va innovatsion EPDM qistirmalari bino ichida doimiy va ideal mikroklimatni saqlaydi.',
        ru: 'Многокамерные термомосты и EPDM уплотнители сохраняют идеальный микроклимат в помещении.',
        en: 'Multi-chamber thermal breaks and innovative EPDM gaskets maintain an optimal indoor climate.'
      },
      metrics: [
        { label: { uz: 'Energiya Tejamkorlik', ru: 'Энергосбережение', en: 'Energy Saving' }, value: 'Up to 45%' },
        { label: { uz: 'Issiqlik O\'tkazuvchanlik', ru: 'Коэфф. Теплопередачи', en: 'Thermal Coeff.' }, value: '0.8 W/m²K' },
      ],
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'stealth',
      number: '03',
      title: {
        uz: 'Yashirin Furnitura va Minimalizm',
        ru: 'Скрытая Фурнитура и Минимализм',
        en: 'Concealed Hardware & Minimalism'
      },
      subtitle: {
        uz: 'Tashqaridan ko\'rinmaydigan petlyalar va toza arxitektura',
        ru: 'Скрытые петли и чистая визуальная архитектура',
        en: 'Invisible hinges and clean visual architecture'
      },
      desc: {
        uz: 'Barcha og\'irlik ko\'taruvchi petlyalar va mexanizmlar profillar ichiga yashirilgan bo\'lib, mutlaq minimalist estetika bag\'ishlaydi.',
        ru: 'Все несущие петли и механизмы скрыты внутри профилей, создавая идеальную минималистичную эстетику.',
        en: 'All load-bearing hinges and systems are hidden inside profiles for a seamlessly clean aesthetic.'
      },
      metrics: [
        { label: { uz: 'Maks. Og\'irlik', ru: 'Макс. Нагрузка', en: 'Max Load' }, value: '400 KG' },
        { label: { uz: 'Ochilish Burchagi', ru: 'Угол Открытия', en: 'Opening Angle' }, value: '180°' },
      ],
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section id="technology" className="relative py-28 bg-[#140F0D] text-[#E2D8CE] border-t border-[#E1931E]/10 overflow-hidden">
      
      {/* BACKGROUND LUXURY GLOW EFFECTS */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#E1931E]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#E1931E]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="inline-flex items-center space-x-3 mb-4">
              <span className="h-[1px] w-10 bg-[#E1931E]"></span>
              <span className="text-xs uppercase tracking-[0.3em] text-[#E1931E] font-medium">
                {lang === 'uz' ? 'Innovatsiyalar va Standart' : lang === 'ru' ? 'Инновации и Стандарты' : 'Innovation & Standards'}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-wide leading-tight">
              {lang === 'uz' ? 'CMECH Texnologiyalari' : lang === 'ru' ? 'Технологии CMECH' : 'CMECH Technologies'}
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-[#9E978E] leading-relaxed font-light">
            {lang === 'uz' 
              ? 'Dunyodagi eng yetakchi muhandislik yechimlari, zamonaviy dizayn va yuqori mustahkamlik mezonlarining mukammal uyg\'unligi.' 
              : lang === 'ru' 
              ? 'Совершенный союз передовых инженерных решений, современного дизайна и высочайшей надежности.' 
              : 'A perfect synthesis of world-leading engineering solutions, modern design, and ultimate durability.'}
          </p>
        </div>

        {/* MAIN FEATURE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* NAVIGATION BUTTONS (LEFT 4 COLS) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {technologies.map((item, index) => {
              const isSelected = activeTab === index;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer p-6 rounded-2xl border transition-all duration-500 relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#1D1714] border-[#E1931E] shadow-2xl shadow-[#E1931E]/10'
                      : 'bg-[#1A1310]/60 border-white/5 hover:border-white/20 hover:bg-[#1A1310]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className={`text-sm font-mono font-bold transition-colors duration-300 ${isSelected ? 'text-[#E1931E]' : 'text-white/30'}`}>
                        {item.number}
                      </span>
                      <h3 className={`text-base font-serif tracking-wide transition-colors duration-300 ${isSelected ? 'text-white font-medium' : 'text-white/70 group-hover:text-white'}`}>
                        {item.title[lang]}
                      </h3>
                    </div>
                    
                    <div className={`transition-transform duration-300 ${isSelected ? 'text-[#E1931E] translate-x-1' : 'text-white/20 group-hover:text-white/50'}`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* ACTIVE INDICATOR BAR */}
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-[#E1931E] transition-all duration-500 ${isSelected ? 'w-full' : 'w-0'}`} />
                </div>
              );
            })}
          </div>

          {/* DISPLAY CARD (RIGHT 7 COLS) */}
          <div className="lg:col-span-7 bg-[#1D1714] border border-[#E1931E]/20 rounded-3xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#E1931E]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* TOP STRIP */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E1931E] font-semibold">
                  TECH SPECIFICATION #{technologies[activeTab].number}
                </span>
                <div className="p-3 bg-[#E1931E]/10 rounded-xl text-[#E1931E] border border-[#E1931E]/20">
                  {technologies[activeTab].icon}
                </div>
              </div>

              {/* TITLE & DESC */}
              <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal mb-3 tracking-wide">
                {technologies[activeTab].title[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-[#E1931E] uppercase tracking-wider mb-6 font-mono">
                {technologies[activeTab].subtitle[lang]}
              </p>
              <p className="text-xs sm:text-base text-[#9E978E] font-light leading-relaxed mb-10">
                {technologies[activeTab].desc[lang]}
              </p>
            </div>

            {/* METRICS SHOWCASE */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              {technologies[activeTab].metrics.map((metric, idx) => (
                <div key={idx} className="bg-[#140F0D] border border-white/5 p-4 rounded-xl">
                  <span className="block text-[10px] sm:text-xs text-[#9E978E] uppercase tracking-wider mb-1">
                    {metric.label[lang]}
                  </span>
                  <span className="font-mono text-lg sm:text-2xl font-bold text-white tracking-tight">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TechnologySection;