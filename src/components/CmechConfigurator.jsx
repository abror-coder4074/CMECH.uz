import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext'; // Context manzilingiz

const TRANSLATIONS = {
  uz: {
    title: "CMECH KONFIGURATORI",
    mechanism: "MEXANIZM",
    profileColor: "LAMINATSIYA / PROFIL RANGI",
    hardwareColor: "FURNITURA RANGI",
    accessories: "QO'SHIMCHA AKSESSUARLAR",
    width: "KENGLIGI:",
    calculateBtn: "USHBU KONFIGURATSIYANI HISOBLASH",
    accPodokonnik: "Podokonnik (Oyna tokchasi)",
    accMoskitka: "Chivinga qarshi to'r (Moskitka)",
    accOtliv: "Otliv (Tashqi suv oqizgich)",
  },
  ru: {
    title: "КОНФИГУРАТОР CMECH",
    mechanism: "МЕХАНИЗМ",
    profileColor: "ЛАМИНАЦИЯ / ЦВЕТ ПРОФИЛЯ",
    hardwareColor: "ЦВЕТ ФУРНИТУРЫ",
    accessories: "ДОПОЛНИТЕЛЬНЫЕ АКСЕССУАРЫ",
    width: "ШИРИНА:",
    calculateBtn: "РАССЧИТАТЬ КОНФИГУРАЦИЮ",
    accPodokonnik: "Подоконник",
    accMoskitka: "Москитная сетка",
    accOtliv: "Отлив (Внешний водоотлив)",
  },
  en: {
    title: "CMECH CONFIGURATOR",
    mechanism: "MECHANISM",
    profileColor: "LAMINATION / PROFILE COLOR",
    hardwareColor: "HARDWARE COLOR",
    accessories: "ADDITIONAL ACCESSORIES",
    width: "WIDTH:",
    calculateBtn: "CALCULATE CONFIGURATION",
    accPodokonnik: "Window Sill (Podokonnik)",
    accMoskitka: "Mosquito Net",
    accOtliv: "Drip Cap / Flashing (Otliv)",
  }
};

const PROFILE_COLORS = [
  { id: 'dark-wood', hex: '#3D2B1F', name: { uz: "To'q daraxt", ru: "Тёмное дерево", en: "Dark Wood" } },
  { id: 'white', hex: '#FFFFFF', name: { uz: "Oq", ru: "Белый", en: "White" } },
  { id: 'anthracite', hex: '#374151', name: { uz: "Antratsit", ru: "Антрацит", en: "Anthracite" } },
  { id: 'brown', hex: '#523A28', name: { uz: "Jigarrang", ru: "Коричневый", en: "Brown" } },
  { id: 'gold-oak', hex: '#D49335', name: { uz: "Oltin emon", ru: "Золотой дуб", en: "Golden Oak" } },
];

const HARDWARE_COLORS = [
  { id: 'white', hex: '#FFFFFF', name: { uz: "Oq", ru: "Белый", en: "White" } },
  { id: 'black', hex: '#1C1917', name: { uz: "Qora", ru: "Чёрный", en: "Black" } },
  { id: 'silver', hex: '#A8A29E', name: { uz: "Kumush", ru: "Серебро", en: "Silver" } },
  { id: 'bronze', hex: '#6B4E3D', name: { uz: "Bronza", ru: "Бронза", en: "Bronze" } },
  { id: 'gold', hex: '#E1931E', name: { uz: "Oltin", ru: "Золото", en: "Gold" } },
];

export default function CmechConfigurator() {
  // Context har xil nomda bo'lishi mumkinligi uchun hammasini tekshiramiz
  const langContext = useLanguage();
  
  // Context ichidan til o'zgaruvchisini aniqlaymiz:
  const rawLang = langContext?.language || langContext?.lang || langContext?.currentLang || 'uz';
  const activeLang = String(rawLang).toLowerCase();
  
  // Agarda mos til topilmasa 'uz'ga o'tadi
  const lang = TRANSLATIONS[activeLang] ? activeLang : 'uz';
  const t = TRANSLATIONS[lang];

  const [width, setWidth] = useState(1000);
  const [mechanism, setMechanism] = useState('Cmech German Precision');
  const [profileColor, setProfileColor] = useState(PROFILE_COLORS[0]);
  const [hardwareColor, setHardwareColor] = useState(HARDWARE_COLORS[4]);
  const [accessories, setAccessories] = useState({
    podokonnik: true,
    moskitka: false,
    otliv: true,
  });

  const handleAccessoryChange = (key) => {
    setAccessories((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full bg-[#1A1310] text-[#E2D8CE] font-sans py-12 px-4 md:px-12 flex flex-col items-center justify-center">
      
      <div className="max-w-6xl w-full mb-6">
        <h2 className="text-xl font-black text-white tracking-widest">{t.title}</h2>
      </div>

      <div className="max-w-6xl w-full bg-[#140F0D] border border-[#2B231D] rounded-3xl p-6 md:p-10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* CHAP TOMON: VIZUALIZATSIYA */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full h-[380px] bg-[#1D1714] border border-[#2B231D] rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
              <div 
                className="h-full relative transition-all duration-300 flex flex-col justify-between shadow-2xl rounded-sm"
                style={{
                  width: `${Math.min(100, Math.max(45, (width / 2400) * 100))}%`,
                  backgroundColor: profileColor.hex,
                  borderWidth: '12px',
                  borderColor: profileColor.hex,
                  boxShadow: '0 10px 25px -5px rgba(0,0,0,0.7)',
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#3B4856]/80 via-[#2A3440]/90 to-[#1A222B] relative overflow-hidden flex items-center justify-center border border-white/10">
                  <div className="absolute -top-20 -left-20 w-40 h-96 bg-white/10 rotate-45 blur-sm pointer-events-none" />
                  
                  {accessories.moskitka && (
                    <div 
                      className="absolute inset-0 bg-repeat opacity-40 z-10 pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                        backgroundSize: '4px 4px'
                      }}
                    />
                  )}

                  <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center">
                    <div 
                      className="w-3.5 h-14 rounded-md shadow-lg transition-colors duration-300 border border-black/30"
                      style={{ backgroundColor: hardwareColor.hex }}
                    />
                  </div>
                </div>

                {accessories.podokonnik && (
                  <div className="absolute -bottom-5 -left-4 -right-4 h-3.5 bg-[#E2D8CE] border-b-2 border-black/40 rounded-sm shadow-md z-30" />
                )}

                {accessories.otliv && (
                  <div className="absolute -bottom-8 -left-2 -right-2 h-3 bg-[#8C827A] border-t border-black/20 z-20 transform -skew-x-12 opacity-90 shadow-sm" />
                )}
              </div>
            </div>

            <div className="w-full mt-8 space-y-3">
              <div className="flex justify-between items-center font-mono text-xs font-bold tracking-wider">
                <span className="text-[#9E978E] uppercase">{t.width}</span>
                <span className="text-[#E1931E] text-base">{width} mm</span>
              </div>

              <input
                type="range"
                min="600"
                max="2400"
                step="10"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full h-1.5 bg-[#2B231D] rounded-lg appearance-none cursor-pointer accent-[#E1931E]"
              />

              <div className="flex justify-between text-[10px] font-mono text-[#615951]">
                <span>600 mm</span>
                <span>2400 mm</span>
              </div>
            </div>
          </div>

          {/* O'NG TOMON: SOZLAMALAR */}
          <div className="lg:col-span-6 space-y-8 pl-0 lg:pl-4 border-t lg:border-t-0 lg:border-l border-[#2B231D] pt-8 lg:pt-0">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#9E978E] mb-3">
                {t.mechanism}
              </label>
              <select
                value={mechanism}
                onChange={(e) => setMechanism(e.target.value)}
                className="w-full bg-[#1D1714] border border-[#2B231D] text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#E1931E] transition cursor-pointer"
              >
                <option value="Cmech German Precision">Cmech German Precision</option>
                <option value="Cmech Heavy Duty Sliding">Cmech Heavy Duty Sliding</option>
                <option value="Cmech Comfort Turn & Tilt">Cmech Comfort Turn & Tilt</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#9E978E] mb-3">
                {t.profileColor} <span className="text-[#E1931E] font-normal text-xs lowercase">({profileColor.name[lang]})</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {PROFILE_COLORS.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setProfileColor(color)}
                    title={color.name[lang]}
                    className={`w-9 h-9 rounded-full transition-all duration-200 border-2 flex items-center justify-center ${
                      profileColor.id === color.id
                        ? 'border-[#E1931E] scale-110 shadow-lg shadow-[#E1931E]/20'
                        : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#9E978E] mb-3">
                {t.hardwareColor} <span className="text-[#E1931E] font-normal text-xs lowercase">({hardwareColor.name[lang]})</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {HARDWARE_COLORS.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setHardwareColor(color)}
                    title={color.name[lang]}
                    className={`w-9 h-9 rounded-full transition-all duration-200 border-2 flex items-center justify-center ${
                      hardwareColor.id === color.id
                        ? 'border-[#E1931E] scale-110 shadow-lg shadow-[#E1931E]/20'
                        : 'border-transparent hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#9E978E] mb-4">
                {t.accessories}
              </label>
              
              <div className="space-y-3">
                {[
                  { key: 'podokonnik', label: t.accPodokonnik },
                  { key: 'moskitka', label: t.accMoskitka },
                  { key: 'otliv', label: t.accOtliv },
                ].map((item) => (
                  <label
                    key={item.key}
                    onClick={() => handleAccessoryChange(item.key)}
                    className="flex items-center gap-3 cursor-pointer select-none text-xs text-[#D1C9BF] hover:text-white transition"
                  >
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                        accessories[item.key]
                          ? 'bg-[#E1931E] border-[#E1931E] text-[#0F0C0A]'
                          : 'bg-[#1D1714] border-[#2B231D]'
                      }`}
                    >
                      {accessories[item.key] && (
                        <svg className="w-3.5 h-3.5 fill-current stroke-current" viewBox="0 0 20 20">
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                        </svg>
                      )}
                    </div>
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button className="w-full bg-[#E1931E] hover:bg-[#c98016] text-[#0F0C0A] font-extrabold text-xs uppercase py-4 rounded-xl transition-all duration-200 tracking-widest shadow-lg shadow-[#E1931E]/10 active:scale-[0.99]">
                {t.calculateBtn}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}