import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const TRANSLATIONS = {
  uz: {
    title: "CMECH KONFIGURATORI",
    sashType: "ROM STRUKTURASI (TABAQALAR)",
    sash2: "2-Tabaqali Rom",
    sash3: "3-Tabaqali Rom",
    mechanism: "MEXANIZM",
    profileColor: "PROFIL RANGI VA LAMINATSIYA",
    hardwareColor: "FURNITURA RANGI",
    accessories: "QO'SHIMCHA AKSESSUARLAR",
    shprots: "DEKORATIV SHPROTSLAR (OLTIN PANJARA)",
    shprotsYes: "✨ Shprots Bor",
    shprotsNo: "🚫 Shprotsiz",
    width: "KENGLIGI:",
    calculateBtn: "USHBU KONFIGURATSIYANI HISOBLASH",
    accPodokonnik: "Podokonnik (Oyna tokchasi)",
    accMoskitka: "Chivinga qarshi to'r (Moskitka)",
    accOtliv: "Otliv (Tashqi suv oqizgich)",
    tabRangli: "Rangli",
    tabLaminatsiya: "Laminatsiya",
    tabEkskluziv: "Ekskluziv"
  },
  ru: {
    title: "КОНФИГУРАТОР CMECH",
    sashType: "СТРУКТУРА ОКНА (СТВОРКИ)",
    sash2: "2-Х Створчатое",
    sash3: "3-Х Створчатое",
    mechanism: "МЕХАНИЗМ",
    profileColor: "ЦВЕТ И ЛАМИНАЦИЯ ПРОФИЛЯ",
    hardwareColor: "ЦВЕТ ФУРНИТУРЫ",
    accessories: "ДОПОЛНИТЕЛЬНЫЕ АКСЕССУАРЫ",
    shprots: "ДЕКОРАТИВНЫЕ ШПРОСЫ (ЗОЛОТО)",
    shprotsYes: "✨ Со шпросами",
    shprotsNo: "🚫 Без шпросов",
    width: "ШИРИНА:",
    calculateBtn: "РАССЧИТАТЬ КОНФИГУРАЦИЮ",
    accPodokonnik: "Подоконник",
    accMoskitka: "Москитная сетка",
    accOtliv: "Отлив (Внешний водоотлив)",
    tabRangli: "Цветные",
    tabLaminatsiya: "Ламинация",
    tabEkskluziv: "Эксклюзив"
  },
  en: {
    title: "CMECH CONFIGURATOR",
    sashType: "WINDOW STRUCTURE",
    sash2: "2-Sash Window",
    sash3: "3-Sash Window",
    mechanism: "MECHANISM",
    profileColor: "PROFILE COLOR & LAMINATION",
    hardwareColor: "HARDWARE COLOR",
    accessories: "ADDITIONAL ACCESSORIES",
    shprots: "DECORATIVE GEORGIAN BARS",
    shprotsYes: "✨ With Bars",
    shprotsNo: "🚫 Without Bars",
    width: "WIDTH:",
    calculateBtn: "CALCULATE CONFIGURATION",
    accPodokonnik: "Window Sill (Podokonnik)",
    accMoskitka: "Mosquito Net",
    accOtliv: "Drip Cap / Flashing (Otliv)",
    tabRangli: "Solid Colors",
    tabLaminatsiya: "Lamination",
    tabEkskluziv: "Exclusive"
  }
};

const PROFILE_COLORS = [
  // --- LAMINATSIYA ---
  {
    id: 'metbrash-1006',
    category: 'laminatsiya',
    hex: '#5a626a',
    texture: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(0,0,0,0.2) 2px, transparent 4px)',
    name: { uz: "Metbrash seriy 1006", ru: "Метбраш серый 1006", en: "Metbrash Grey 1006" }
  },
  {
    id: 'alyuks-1012',
    category: 'laminatsiya',
    hex: '#3d4550',
    texture: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px) 0 0/4px 4px',
    name: { uz: "Alyuks antrasit 1012", ru: "Алюкс антрацит 1012", en: "Alyuks Anthracite 1012" }
  },
  {
    id: 'dub-mokko-2048',
    category: 'laminatsiya',
    hex: '#4a3b32',
    texture: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.15) 0px, rgba(255,255,255,0.05) 3px, transparent 6px)',
    name: { uz: "Dub mokko 2048", ru: "Дуб мокко 2048", en: "Oak Mokka 2048" }
  },
  {
    id: 'zal-dub',
    category: 'laminatsiya',
    hex: '#8c6d3f',
    texture: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(255,255,255,0.08) 2px, transparent 5px)',
    name: { uz: "Zal-dub", ru: "Зал-дуб", en: "Zal-Oak" }
  },
  {
    id: 'sheffild-vicokogorniy-3002',
    category: 'laminatsiya',
    hex: '#a8b0b8',
    texture: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0px, rgba(0,0,0,0.08) 2px, transparent 4px)',
    name: { uz: "Sheffildskiy vicokogorniy dub 3002", ru: "Шеффилдский высокогорный дуб 3002", en: "Sheffield Alpine Oak 3002" }
  },
  {
    id: 'vinchester-3077',
    category: 'laminatsiya',
    hex: '#ad8253',
    texture: 'repeating-linear-gradient(80deg, rgba(0,0,0,0.1) 0px, rgba(255,255,255,0.06) 4px, transparent 8px)',
    name: { uz: "Vinchester 3077", ru: "Винчестер 3077", en: "Winchester 3077" }
  },
  {
    id: 'opex-2012',
    category: 'laminatsiya',
    hex: '#3d2e24',
    texture: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.2) 0px, rgba(255,255,255,0.03) 2px, transparent 4px)',
    name: { uz: "Opex 2012", ru: "Орех 2012", en: "Walnut 2012" }
  },

  // --- RANGLI (RAL) ---
  { id: 'white', category: 'rangli', hex: '#FFFFFF', texture: 'none', name: { uz: "Oq", ru: "Белый", en: "White" } },
  { id: 'sw306g', category: 'rangli', hex: '#2c3036', texture: 'none', name: { uz: "SW306G To'q Kulrang", ru: "SW306G Тёмно-серый", en: "SW306G Dark Grey" } },
  { id: 'ral-7016', category: 'rangli', hex: '#383e42', texture: 'none', name: { uz: "RAL 7016 Antratsit", ru: "RAL 7016 Антрацит", en: "RAL 7016 Anthracite" } },
  { id: 'ral-8017', category: 'rangli', hex: '#3b2820', texture: 'none', name: { uz: "RAL 8017 Shokolad", ru: "RAL 8017 Шоколадный", en: "RAL 8017 Chocolate" } },
  { id: 'ral-9005', category: 'rangli', hex: '#111111', texture: 'none', name: { uz: "RAL 9005 Qora", ru: "RAL 9005 Чёрный", en: "RAL 9005 Jet Black" } },

  // --- EKSKLUZIV ---
  { id: 'emerald', category: 'ekskluziv', hex: '#1b3c34', texture: 'none', name: { uz: "Zumrad Yashil", ru: "Изумрудно-зелёный", en: "Emerald Green" } },
  { id: 'matteks-antrasit-6003', category: 'ekskluziv', hex: '#444c56', texture: 'none', name: { uz: "Matteks antrasit 6003", ru: "Маттекс антрацит 6003", en: "Matteks Anthracite 6003" } }
];

const HARDWARE_COLORS = [
  { id: 'white', hex: '#FFFFFF', name: { uz: "Oq", ru: "Белый", en: "White" } },
  { id: 'black', hex: '#1C1917', name: { uz: "Qora", ru: "Чёрный", en: "Black" } },
  { id: 'silver', hex: '#A8A29E', name: { uz: "Kumush", ru: "Серебро", en: "Silver" } },
  { id: 'bronze', hex: '#6B4E3D', name: { uz: "Bronza", ru: "Бронза", en: "Bronze" } },
  { id: 'gold', hex: '#E1931E', name: { uz: "Oltin", ru: "Золото", en: "Gold" } },
];

export default function CmechConfigurator() {
  const langContext = useLanguage();
  const rawLang = langContext?.language || langContext?.lang || langContext?.currentLang || 'uz';
  const activeLang = String(rawLang).toLowerCase();
  const lang = TRANSLATIONS[activeLang] ? activeLang : 'uz';
  const t = TRANSLATIONS[lang];

  // STATE-LAR
  const [sashType, setSashType] = useState(3);
  const [activeTab, setActiveTab] = useState('laminatsiya'); 
  const [width, setWidth] = useState(1800);
  const [mechanism, setMechanism] = useState('Cmech German Precision');
  const [profileColor, setProfileColor] = useState(PROFILE_COLORS[0]);
  const [hardwareColor, setHardwareColor] = useState(HARDWARE_COLORS[4]);
  const [hasShprots, setHasShprots] = useState(true);
  const [accessories, setAccessories] = useState({
    podokonnik: true,
    moskitka: true,
    otliv: true,
  });

  const handleAccessoryChange = (key) => {
    setAccessories((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredProfileColors = PROFILE_COLORS.filter(c => c.category === activeTab);

  return (
    <div className="w-full bg-[#1A1310] text-[#E2D8CE] font-sans py-6 sm:py-12 px-3 sm:px-6 md:px-12 flex flex-col items-center justify-center select-none">
      
      {/* SARLAVHA */}
      <div className="max-w-6xl w-full mb-4 sm:mb-6 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-widest uppercase">{t.title}</h2>
      </div>

      <div className="max-w-6xl w-full bg-[#140F0D] border border-[#2B231D] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">
          
          {/* CHAP TOMON: VISUALIZATSIYA */}
          <div className="lg:col-span-6 flex flex-col items-center w-full">
            <div className="w-full h-[300px] sm:h-[380px] md:h-[420px] bg-[#1D1714] border border-[#2B231D] rounded-2xl p-3 sm:p-6 flex items-center justify-center relative overflow-hidden shadow-inner">
              
              {/* ASOSIY TASHQI RAMKA */}
              <div 
                className="h-full relative transition-all duration-300 flex p-1.5 sm:p-2.5 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.9)] min-w-[200px]"
                style={{
                  width: `${Math.min(100, Math.max(50, (width / 2400) * 100))}%`,
                  backgroundColor: profileColor.hex,
                  backgroundImage: profileColor.texture,
                  boxShadow: 'inset 0 0 8px rgba(0,0,0,0.3), 0 15px 35px rgba(0,0,0,0.8)'
                }}
              >
                {/* 2-TABAQALI ROM STRUKTURASI */}
                {sashType === 2 && (
                  <div className="w-full h-full flex gap-1 relative">
                    {/* CHAP TABAQA */}
                    <div className="w-1/2 h-full p-1 border border-black/15 bg-transparent relative overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-[#3B4856]/80 via-[#2A3440]/90 to-[#1A222B] relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                        
                        {hasShprots && (
                          <div className="absolute inset-0 grid grid-cols-2 grid-rows-4 pointer-events-none">
                            <div className="border-r border-b border-[#E1931E]/80" />
                            <div className="border-b border-[#E1931E]/80" />
                            <div className="border-r border-b border-[#E1931E]/80" />
                            <div className="border-b border-[#E1931E]/80" />
                            <div className="border-r border-b border-[#E1931E]/80" />
                            <div className="border-b border-[#E1931E]/80" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* IMPOST */}
                    <div 
                      className="w-2 sm:w-3 h-full z-10 shadow-sm border-x border-black/20 shrink-0" 
                      style={{ backgroundColor: profileColor.hex, backgroundImage: profileColor.texture }}
                    />

                    {/* O'NG TABAQA */}
                    <div 
                      className="w-1/2 h-full p-1 sm:p-1.5 border border-black/20 relative shadow-md"
                      style={{ backgroundColor: profileColor.hex, backgroundImage: profileColor.texture }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-[#3B4856]/80 via-[#2A3440]/90 to-[#1A222B] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

                        {accessories.moskitka && (
                          <div 
                            className="absolute inset-0 opacity-60 z-10 pointer-events-none"
                            style={{
                              backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                              backgroundSize: '3px 3px'
                            }}
                          />
                        )}

                        {hasShprots && (
                          <div className="absolute inset-0 grid grid-cols-2 grid-rows-4 pointer-events-none">
                            <div className="border-r border-b border-[#E1931E]/80" />
                            <div className="border-b border-[#E1931E]/80" />
                            <div className="border-r border-b border-[#E1931E]/80" />
                            <div className="border-b border-[#E1931E]/80" />
                            <div className="border-r border-b border-[#E1931E]/80" />
                            <div className="border-b border-[#E1931E]/80" />
                          </div>
                        )}

                        {/* TUTQICH */}
                        <div className="absolute left-1 top-1/2 -translate-y-1/2 z-30 flex items-center">
                          <div 
                            className="w-1.5 sm:w-2.5 h-7 sm:h-10 rounded-sm shadow-xl border border-black/30"
                            style={{ backgroundColor: hardwareColor.hex }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3-TABAQALI PANORAMIK ROM STRUKTURASI (O'RTA KATTAROQ, CHEKKALARI KICHIK) */}
                {sashType === 3 && (
                  <div className="w-full h-full flex gap-1 relative">
                    
                    {/* CHAP KICHIK TABAQA (25%) */}
                    <div className="w-1/4 h-full p-1 border border-black/15 bg-transparent relative overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-[#3B4856]/80 via-[#2A3440]/90 to-[#1A222B] relative">
                        {hasShprots && (
                          <div className="absolute inset-0 grid grid-cols-1 grid-rows-4 pointer-events-none">
                            <div className="border-b border-[#E1931E]/80" />
                            <div className="border-b border-[#E1931E]/80" />
                            <div className="border-b border-[#E1931E]/80" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* IMPOST 1 */}
                    <div 
                      className="w-2 sm:w-2.5 h-full z-10 border-x border-black/20 shrink-0" 
                      style={{ backgroundColor: profileColor.hex, backgroundImage: profileColor.texture }}
                    />

                    {/* O'RTA KATTA OCHILADIGAN TABAQA (50%) */}
                    <div 
                      className="w-1/2 h-full p-1 sm:p-1.5 border border-black/20 relative shadow-md"
                      style={{ backgroundColor: profileColor.hex, backgroundImage: profileColor.texture }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-[#3B4856]/80 via-[#2A3440]/90 to-[#1A222B] relative">
                        {accessories.moskitka && (
                          <div 
                            className="absolute inset-0 opacity-60 z-10 pointer-events-none"
                            style={{
                              backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                              backgroundSize: '3px 3px'
                            }}
                          />
                        )}
                        {hasShprots && (
                          <div className="absolute inset-0 grid grid-cols-2 grid-rows-4 pointer-events-none">
                            <div className="border-r border-b border-[#E1931E]/80" />
                            <div className="border-b border-[#E1931E]/80" />
                            <div className="border-r border-b border-[#E1931E]/80" />
                            <div className="border-b border-[#E1931E]/80" />
                            <div className="border-r border-b border-[#E1931E]/80" />
                            <div className="border-b border-[#E1931E]/80" />
                          </div>
                        )}
                        {/* TUTQICH */}
                        <div className="absolute right-1 top-1/2 -translate-y-1/2 z-30">
                          <div 
                            className="w-1.5 sm:w-2.5 h-7 sm:h-10 rounded-sm shadow-xl border border-black/30"
                            style={{ backgroundColor: hardwareColor.hex }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* IMPOST 2 */}
                    <div 
                      className="w-2 sm:w-2.5 h-full z-10 border-x border-black/20 shrink-0" 
                      style={{ backgroundColor: profileColor.hex, backgroundImage: profileColor.texture }}
                    />

                    {/* O'NG KICHIK TABAQA (25%) */}
                    <div className="w-1/4 h-full p-1 border border-black/15 bg-transparent relative overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-[#3B4856]/80 via-[#2A3440]/90 to-[#1A222B] relative">
                        {hasShprots && (
                          <div className="absolute inset-0 grid grid-cols-1 grid-rows-4 pointer-events-none">
                            <div className="border-b border-[#E1931E]/80" />
                            <div className="border-b border-[#E1931E]/80" />
                            <div className="border-b border-[#E1931E]/80" />
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                )}

                {/* PODOKONNIK */}
                {accessories.podokonnik && (
                  <div className="absolute -bottom-4 sm:-bottom-5 -left-3 sm:-left-4 -right-3 sm:-right-4 h-2.5 sm:h-3.5 bg-[#E2D8CE] border-b-2 border-black/50 rounded-sm shadow-xl z-30 pointer-events-none" />
                )}

                {/* OTLIV */}
                {accessories.otliv && (
                  <div className="absolute -bottom-7 sm:-bottom-8 -left-2 -right-2 h-2.5 sm:h-3 bg-[#8C827A] border-t border-black/30 z-20 transform -skew-x-12 opacity-90 shadow-sm pointer-events-none" />
                )}
              </div>
            </div>

            {/* O'LCHAM (SLIDER) */}
            <div className="w-full mt-4 sm:mt-6 space-y-2">
              <div className="flex justify-between items-center font-mono text-xs font-bold tracking-wider">
                <span className="text-[#9E978E] uppercase">{t.width}</span>
                <span className="text-[#E1931E] text-sm sm:text-base">{width} mm</span>
              </div>

              <input
                type="range"
                min="600"
                max="2400"
                step="10"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full h-2 sm:h-1.5 bg-[#2B231D] rounded-lg appearance-none cursor-pointer accent-[#E1931E]"
              />

              <div className="flex justify-between text-[10px] font-mono text-[#615951]">
                <span>600 mm</span>
                <span>2400 mm</span>
              </div>
            </div>
          </div>

          {/* O'NG TOMON: CONTROL PANEL */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 pl-0 lg:pl-4 border-t lg:border-t-0 lg:border-l border-[#2B231D] pt-5 lg:pt-0 w-full">
            
            {/* 1. ROM TURI TANLOVI */}
            <div>
              <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9E978E] mb-2">
                {t.sashType}
              </label>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setSashType(2)}
                  className={`py-2.5 sm:py-3 px-3 rounded-xl border text-[11px] sm:text-xs font-bold transition-all ${
                    sashType === 2
                      ? 'border-[#E1931E] bg-[#E1931E]/15 text-white'
                      : 'border-[#2B231D] bg-[#1D1714] text-[#9E978E] hover:border-[#E1931E]/40'
                  }`}
                >
                  {t.sash2}
                </button>
                <button
                  type="button"
                  onClick={() => setSashType(3)}
                  className={`py-2.5 sm:py-3 px-3 rounded-xl border text-[11px] sm:text-xs font-bold transition-all ${
                    sashType === 3
                      ? 'border-[#E1931E] bg-[#E1931E]/15 text-white'
                      : 'border-[#2B231D] bg-[#1D1714] text-[#9E978E] hover:border-[#E1931E]/40'
                  }`}
                >
                  {t.sash3}
                </button>
              </div>
            </div>

            {/* 2. MEXANIZM SELEKTORI */}
            <div>
              <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9E978E] mb-2">
                {t.mechanism}
              </label>
              <select
                value={mechanism}
                onChange={(e) => setMechanism(e.target.value)}
                className="w-full bg-[#1D1714] border border-[#2B231D] text-white text-xs rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:border-[#E1931E] transition cursor-pointer font-medium"
              >
                <option value="Cmech German Precision">Cmech German Precision</option>
                <option value="Cmech Heavy Duty Sliding">Cmech Heavy Duty Sliding</option>
                <option value="Cmech Comfort Turn & Tilt">Cmech Comfort Turn & Tilt</option>
              </select>
            </div>

            {/* 3. PROFIL RANGI */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9E978E]">
                  {t.profileColor}
                </label>
                <span className="text-[#E1931E] font-medium text-xs truncate max-w-[150px] text-right">
                  {profileColor.name[lang] || profileColor.name.uz}
                </span>
              </div>

              {/* TABLAR */}
              <div className="flex bg-[#1D1714] p-1 rounded-xl border border-[#2B231D] mb-3">
                {[
                  { id: 'rangli', label: t.tabRangli },
                  { id: 'laminatsiya', label: t.tabLaminatsiya },
                  { id: 'ekskluziv', label: t.tabEkskluziv }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id);
                      const firstCatColor = PROFILE_COLORS.find(c => c.category === tab.id);
                      if (firstCatColor) setProfileColor(firstCatColor);
                    }}
                    className={`flex-1 py-1.5 text-[10px] sm:text-[11px] font-bold rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-[#E1931E] text-black shadow-md'
                        : 'text-[#9E978E] hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* COLORS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[160px] overflow-y-auto pr-1">
                {filteredProfileColors.map((color) => {
                  const isSelected = profileColor.id === color.id;
                  return (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => setProfileColor(color)}
                      className={`flex items-center space-x-2.5 p-2 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-[#E1931E] bg-[#E1931E]/10 text-white'
                          : 'border-[#2B231D] bg-[#1D1714] text-[#9E978E] hover:border-white/20'
                      }`}
                    >
                      <span 
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-md border border-white/20 shrink-0 shadow-inner" 
                        style={{ backgroundColor: color.hex, backgroundImage: color.texture }}
                      />
                      <span className="text-[11px] font-medium truncate">
                        {color.name[lang] || color.name.uz}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. FURNITURA RANGI */}
            <div>
              <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9E978E] mb-2">
                {t.hardwareColor} <span className="text-[#E1931E] font-normal text-xs lowercase">({hardwareColor.name[lang]})</span>
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {HARDWARE_COLORS.map((color) => (
                  <button
                    key={color.id}
                    type="button"
                    onClick={() => setHardwareColor(color)}
                    title={color.name[lang]}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-200 border-2 flex items-center justify-center ${
                      hardwareColor.id === color.id
                        ? 'border-[#E1931E] scale-110 shadow-lg shadow-[#E1931E]/20'
                        : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* 5. DEKORATIV SHPROTSLAR */}
            <div>
              <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9E978E] mb-2">
                {t.shprots}
              </label>
              <div className="flex gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setHasShprots(true)}
                  className={`flex-1 py-2 px-2 sm:px-3 rounded-lg border text-[11px] sm:text-xs font-bold transition-all ${
                    hasShprots
                      ? 'border-[#E1931E] bg-[#E1931E]/20 text-white'
                      : 'border-[#2B231D] bg-[#1D1714] text-[#9E978E]'
                  }`}
                >
                  {t.shprotsYes}
                </button>
                <button
                  type="button"
                  onClick={() => setHasShprots(false)}
                  className={`flex-1 py-2 px-2 sm:px-3 rounded-lg border text-[11px] sm:text-xs font-bold transition-all ${
                    !hasShprots
                      ? 'border-[#E1931E] bg-[#E1931E]/20 text-white'
                      : 'border-[#2B231D] bg-[#1D1714] text-[#9E978E]'
                  }`}
                >
                  {t.shprotsNo}
                </button>
              </div>
            </div>

            {/* 6. QO'SHIMCHA AKSESSUARLAR */}
            <div>
              <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#9E978E] mb-2.5">
                {t.accessories}
              </label>
              <div className="space-y-2 sm:space-y-2.5">
                {[
                  { key: 'podokonnik', label: t.accPodokonnik },
                  { key: 'moskitka', label: t.accMoskitka },
                  { key: 'otliv', label: t.accOtliv },
                ].map((item) => (
                  <label
                    key={item.key}
                    className="flex items-center gap-3 cursor-pointer text-xs text-[#D1C9BF] hover:text-white transition select-none"
                  >
                    <input
                      type="checkbox"
                      checked={accessories[item.key]}
                      onChange={() => handleAccessoryChange(item.key)}
                      className="hidden"
                    />
                    <div
                      className={`w-4 h-4 sm:w-5 sm:h-5 rounded flex items-center justify-center border transition-all shrink-0 ${
                        accessories[item.key]
                          ? 'bg-[#E1931E] border-[#E1931E] text-[#0F0C0A]'
                          : 'bg-[#1D1714] border-[#2B231D]'
                      }`}
                    >
                      {accessories[item.key] && (
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current stroke-current" viewBox="0 0 20 20">
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                        </svg>
                      )}
                    </div>
                    <span className="text-[11px] sm:text-xs">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="pt-2">
              <button 
                type="button"
                className="w-full bg-[#E1931E] hover:bg-[#c98016] text-[#0F0C0A] font-extrabold text-[11px] sm:text-xs uppercase py-3.5 sm:py-4 rounded-xl transition-all duration-200 tracking-widest shadow-lg shadow-[#E1931E]/10 active:scale-[0.99]"
              >
                {t.calculateBtn}
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}