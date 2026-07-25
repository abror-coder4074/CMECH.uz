import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SystemsSection = () => {
  const languageContext = useLanguage();
  // Safe language getter to prevent errors if context signature differs
  const currentLang = languageContext?.lang || languageContext?.language || 'uz';
  const activeLang = String(currentLang).toLowerCase();
  const lang = ['uz', 'ru', 'en'].includes(activeLang) ? activeLang : 'uz';

  const [activeCategory, setActiveCategory] = useState('all');

  // Tizimlar katalogi
  const systems = [
    {
      id: 'cmech-78-sliding',
      category: 'sliding',
      title: 'Cmech Lift & Slide 78',
      subtitle: {
        uz: 'Ko\'tarilib suriluvchi panoramik eshiklar',
        ru: 'Подъёмно-сдвижная панорамная система',
        en: 'Lift & Slide Panoramic Doors'
      },
      desc: {
        uz: 'Og\'irligi 400 kg gacha bo\'lgan ulkan shisha tabaqalarni bir barmog\'ingiz bilan yengil surish imkoniyati.',
        ru: 'Легкое скольжение огромных стеклянных створок весом до 400 кг одним касанием.',
        en: 'Effortless gliding of massive glass sashes weighing up to 400 kg with a single touch.'
      },
      specs: {
        depth: '150 mm',
        glass: '40 - 52 mm',
        thermal: 'Uf = 1.2 W/m²K'
      },
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'cmech-70-thermo',
      category: 'window',
      title: 'Cmech Thermo Window 70',
      subtitle: {
        uz: 'Nemis standartidagi deraza tizimi',
        ru: 'Оконная система немецкого стандарта',
        en: 'German Standard Window System'
      },
      desc: {
        uz: 'Maksimal shamol va ovoz izolyatsiyasiga ega, yashirin petlyali minimalist dizayndagi romlar.',
        ru: 'Окна с максимальной шумоизоляцией и скрытыми петлями в минималистичном стиле.',
        en: 'Minimalist windows with concealed hinges delivering supreme acoustics and storm protection.'
      },
      specs: {
        depth: '70 mm',
        glass: '32 - 44 mm',
        thermal: 'Uf = 0.9 W/m²K'
      },
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'cmech-folding-slim',
      category: 'folding',
      title: 'Cmech Fold-Slim 85',
      subtitle: {
        uz: 'Garmoshka ko\'rinishidagi yig\'iluvchi eshiklar',
        ru: 'Складная система «Гармошка»',
        en: 'Bi-Fold & Accordion System'
      },
      desc: {
        uz: 'Butun devor maydonini 100% ochib yuborish imkonini beruvchi, terrasa va basseynlar uchun ideal yechim.',
        ru: 'Полное открытие проема на 100%, идеальное решение для террас и выходов к бассейну.',
        en: 'Opens up 100% of the structural opening, perfect for luxury terraces and poolside access.'
      },
      specs: {
        depth: '85 mm',
        glass: '36 - 48 mm',
        thermal: 'Uf = 1.1 W/m²K'
      },
      image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const filteredSystems = activeCategory === 'all' 
    ? systems 
    : systems.filter(s => s.category === activeCategory);

  return (
    <section id="systems" className="relative py-28 bg-[var(--color-cmech-dark)] text-[var(--color-cmech-text)] border-t border-[var(--color-cmech-gold)]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center space-x-3 mb-4">
              <span className="h-[1px] w-8 bg-[var(--color-cmech-gold)]"></span>
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-cmech-gold)] font-medium">
                {lang === 'uz' ? 'Mahsulot Liniyasi' : lang === 'ru' ? 'Линейка Продукции' : 'Product Collection'}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-wide">
              {lang === 'uz' ? 'Arxitektura Tizimlari' : lang === 'ru' ? 'Архитектурные Системы' : 'Architectural Systems'}
            </h2>
          </div>

          {/* CATEGORY FILTER BUTTONS (RESPONSIVE GRID 2x2 FOR MOBILE, FLEX FOR DESKTOP) */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 bg-white/[0.03] p-1.5 border border-white/10 rounded-2xl sm:rounded-full w-full md:w-auto">
            {[
              { id: 'all', label: { uz: 'Barchasi', ru: 'Все', en: 'All' } },
              { id: 'sliding', label: { uz: 'Surma (Sliding)', ru: 'Сдвижные', en: 'Sliding' } },
              { id: 'window', label: { uz: 'Romlar', ru: 'Окна', en: 'Windows' } },
              { id: 'folding', label: { uz: 'Garmoshka', ru: 'Складные', en: 'Bi-Fold' } },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs uppercase tracking-[0.15em] text-center px-4 py-2.5 rounded-xl sm:rounded-full transition-all duration-300 w-full sm:w-auto ${
                  activeCategory === cat.id 
                    ? 'bg-[var(--color-cmech-gold)] text-[var(--color-cmech-dark)] font-semibold shadow-lg' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSystems.map(item => (
            <div 
              key={item.id}
              className="bg-white/[0.02] border border-[var(--color-cmech-gold)]/15 hover:border-[var(--color-cmech-gold)]/50 transition-all duration-500 rounded-sm overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cmech-dark)] via-transparent to-transparent opacity-80" />
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-cmech-gold)] font-medium block mb-2">
                    {item.subtitle[lang]}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-normal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--color-cmech-text)]/70 leading-relaxed font-light mb-6">
                    {item.desc[lang]}
                  </p>

                  {/* SPECS STRIP */}
                  <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/10 text-center">
                    <div>
                      <span className="block text-[10px] text-white/40 uppercase tracking-wider mb-1">
                        {lang === 'uz' ? 'Profil' : lang === 'ru' ? 'Профиль' : 'Depth'}
                      </span>
                      <span className="text-xs font-semibold text-white">{item.specs.depth}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-white/40 uppercase tracking-wider mb-1">
                        {lang === 'uz' ? 'Shisha' : lang === 'ru' ? 'Стекло' : 'Glass'}
                      </span>
                      <span className="text-xs font-semibold text-white">{item.specs.glass}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-white/40 uppercase tracking-wider mb-1">
                        {lang === 'uz' ? 'Izolyatsiya' : lang === 'ru' ? 'Тепло' : 'Thermal'}
                      </span>
                      <span className="text-xs font-semibold text-[var(--color-cmech-gold)]">{item.specs.thermal}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION FOOTER */}
              <div className="px-7 pb-7 pt-2">
                <a 
                  href="#contact" 
                  className="w-full inline-block text-center border border-[var(--color-cmech-gold)]/40 hover:border-[var(--color-cmech-gold)] hover:bg-[var(--color-cmech-gold)] hover:text-[var(--color-cmech-dark)] text-xs uppercase tracking-[0.2em] py-3 transition-all duration-300 font-medium rounded-sm"
                >
                  {lang === 'uz' ? 'Loyiha Hisobi' : lang === 'ru' ? 'Расчет Проекта' : 'Request Quote'}
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SystemsSection;