import React, { createContext, useState, useContext } from 'react';

// BARCHA TILLAR TIZIMI (UZ, RU, EN)
export const translations = {
  uz: {
    catalogBtn: "Katalog",
    nav: {
      philosophy: "Falsafa",
      technology: "Texnologiya",
      systems: "Tizimlar",
      gallery: "Galereya",
      showroom: "Shourum"
    },
    hero: {
      tag: "Premium Thermo Systems",
      titleLine1: "Muhandislik Aniqligi.",
      titleLine2: "Arxitektura Mukammalligi.",
      desc: "Cmech Premium Thermo — zamonaviy me'morchilik va nozik estetika chorrahasida yaratilgan evropa standartidagi alyuminiy eshik va rom tizimlari.",
      ctaBtn: "Ekspozitsiyani ko'rish",
      discover: "Kashf eting"
    },
    philosophy: {
      tag: "Falsafa va Injiniring",
      title: "Mukammallik tasodif emas.",
      subtitle: "U nozik hisob-kitob natijasidir.",
      card1Title: "Evropa Standart Injiniringi",
      card1Desc: "Har bir profil mikron darajasidagi aniqlik bilan loyihalanadi. Yuqori aniqlikdagi furnituralar va zichlagichlar mutlaq germetiklikni ta'minlaydi.",
      card2Title: "Termik Izolyatsiya San'ati",
      card2Desc: "Maxsus Thermo-Break texnologiyasi tashqi va ichki harorat o'rtasidagi ko'prikni uzadi va xona ichida mukammal mikroklimat yaratadi.",
      card3Title: "Cheksiz Estetika",
      card3Desc: "Minimalist ramkalar va ulkan panoramik shisha maydonlari binoga nafislik va zamonaviy arxitektura statusini beradi.",
      metric1: "Issiqlik O'tkazuvchanlik",
      metric2: "Ovoz Izolyatsiyasi",
      metric3: "Havo O'tkazmaslik",
      metric4: "Kafolatlangan Xizmat"
    }
  },
  ru: {
    catalogBtn: "Каталог",
    nav: {
      philosophy: "Философия",
      technology: "Технологии",
      systems: "Системы",
      gallery: "Галерея",
      showroom: "Шоурум"
    },
    hero: {
      tag: "Premium Thermo Systems",
      titleLine1: "Инженерная Точность.",
      titleLine2: "Архитектурное Совершенство.",
      desc: "Cmech Premium Thermo — оконно-дверные системы из алюминия европейского стандарта, созданные на стыке современной архитектуры и эстетики.",
      ctaBtn: "Смотреть экспозицию",
      discover: "Исследовать"
    },
    philosophy: {
      tag: "Философия и Инженерия",
      title: "Совершенство не случайность.",
      subtitle: "Это результат точного расчета.",
      card1Title: "Европейские Стандарты",
      card1Desc: "Каждый профиль спроектирован с микронной точностью. Высокофрикционная фурнитура гарантирует абсолютную герметичность.",
      card2Title: "Искусство Термоизоляции",
      card2Desc: "Технология Thermo-Break прерывает мостик холода, создавая идеальный микроклимат внутри помещения.",
      card3Title: "Безграничная Эстетика",
      card3Desc: "Минималистичные рамы и панорамное остекление придают зданию особый статус и архитектурную элегантность.",
      metric1: "Теплопроводность",
      metric2: "Звукоизоляция",
      metric3: "Воздухонепроницаемость",
      metric4: "Гарантия службы"
    }
  },
  en: {
    catalogBtn: "Catalog",
    nav: {
      philosophy: "Philosophy",
      technology: "Technology",
      systems: "Systems",
      gallery: "Gallery",
      showroom: "Showroom"
    },
    hero: {
      tag: "Premium Thermo Systems",
      titleLine1: "Engineering Precision.",
      titleLine2: "Architectural Perfection.",
      desc: "Cmech Premium Thermo — European-standard engineered aluminum door and window systems designed at the intersection of modern architecture and luxury aesthetics.",
      ctaBtn: "View Exposition",
      discover: "Discover"
    },
    philosophy: {
      tag: "Philosophy & Engineering",
      title: "Perfection is no coincidence.",
      subtitle: "It is the result of precise calculation.",
      card1Title: "European Engineering Standards",
      card1Desc: "Every profile is designed with micron precision. High-performance hardware guarantees complete airtight sealing.",
      card2Title: "Art of Thermal Insulation",
      card2Desc: "Special Thermo-Break technology eliminates thermal bridges, maintaining an ideal indoor microclimate.",
      card3Title: "Boundless Aesthetics",
      card3Desc: "Minimalist frames and expansive panoramic glass surfaces confer prestige and architectural refinement.",
      metric1: "Thermal Conductivity",
      metric2: "Sound Insulation",
      metric3: "Airtight Class",
      metric4: "Guaranteed Service"
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('uz'); // Default: UZ

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);