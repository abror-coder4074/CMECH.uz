import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ShowroomSection = () => {
  const languageContext = useLanguage();
  const currentLang = languageContext?.lang || languageContext?.language || 'uz';
  const activeLang = String(currentLang).toLowerCase();
  const lang = ['uz', 'ru', 'en'].includes(activeLang) ? activeLang : 'uz';

  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  // Google Maps embed URL with exact coordinates (40.9752484, 71.7182941 - Namangan)
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d601.7619212001556!2d71.7182941!3d40.9752484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4e5edd9f9fd5%3A0x31ffdb0be33ee771!2zNDDCsDU4JzMwLjkiTiA3McKwNDMnMDUuOSJF!5e1!3m2!1suz!2s!4v1710000000000!5m2!1suz!2s";
  
  const googleMapsDirectUrl = "https://www.google.com/maps/place/XPG9%2B479,+%D0%9D%D0%B0%D0%BC%D0%B0%D0%BD%D0%B3%D0%B0%D0%BD,+%D0%9D%D0%B0%D0%BC%D0%B0%D0%BD%D0%B3%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@40.9752484,71.7182941,17z";

  return (
    <section id="showroom" className="relative py-24 bg-[#140F0D] text-[#E2D8CE] border-t border-[#E1931E]/10 overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E1931E]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="h-[1px] w-8 bg-[#E1931E]"></span>
            <span className="text-xs uppercase tracking-[0.3em] text-[#E1931E] font-medium">
              {lang === 'uz' ? 'Eksklyuziv Shourum' : lang === 'ru' ? 'Эксклюзивный Шоурум' : 'Exclusive Showroom'}
            </span>
            <span className="h-[1px] w-8 bg-[#E1931E]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-wide mb-4">
            {lang === 'uz' ? 'CMECH Premium Shourumiga Tashrif Buyuring' : lang === 'ru' ? 'Посетите Премиальный Шоурум CMECH' : 'Visit CMECH Premium Showroom'}
          </h2>
          <p className="text-xs sm:text-sm text-[#9E978E] font-light leading-relaxed">
            {lang === 'uz' 
              ? 'Namangan shahridagi bosh shourumimizda nemis sifatidagi mahsulotlarni o\'zingiz sinab ko\'ring va ekspert konsultatsiyasiga ega bo\'ling.' 
              : lang === 'ru' 
              ? 'Оцените немецкое качество в нашем флагманском шоуруме в г. Наманган и получите экспертную консультацию.' 
              : 'Experience German precision firsthand in our flagship showroom in Namangan and receive expert consultation.'}
          </p>
        </div>

        {/* MAIN SHOWROOM & CONTACT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* MAP & INFO (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* GOOGLE MAP EMBED CONTAINER */}
            <div className="relative w-full h-[380px] bg-[#1D1714] border border-[#2B231D] rounded-3xl overflow-hidden shadow-2xl group">
              <iframe
                title="CMECH Showroom Location"
                src={mapEmbedUrl}
                className="w-full h-full border-0 filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* CMECH MAP BADGE */}
              <a
                href={googleMapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#140F0D]/90 backdrop-blur-md border border-[#E1931E]/40 px-5 py-3 rounded-2xl flex items-center justify-between sm:justify-start space-x-4 shadow-xl hover:bg-[#E1931E] hover:text-[#0F0C0A] transition-all duration-300 group/btn"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-[#E1931E] group-hover/btn:bg-[#0F0C0A] animate-ping" />
                  <div>
                    <span className="block text-xs font-bold font-serif text-white group-hover/btn:text-[#0F0C0A] uppercase tracking-wider">
                      CMECH Showroom Namangan
                    </span>
                    <span className="block text-[10px] text-[#9E978E] group-hover/btn:text-[#0F0C0A]/80 font-mono">
                      XPG9+479, Namangan
                    </span>
                  </div>
                </div>
                <svg className="w-4 h-4 text-[#E1931E] group-hover/btn:text-[#0F0C0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* QUICK CONTACT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#1D1714] border border-[#2B231D] p-5 rounded-2xl flex items-start space-x-4">
                <div className="p-3 bg-[#E1931E]/10 rounded-xl text-[#E1931E]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-[#9E978E] mb-1">
                    {lang === 'uz' ? 'Telefon' : lang === 'ru' ? 'Телефон' : 'Phone'}
                  </span>
                  <a href="tel:+998502070000" className="text-sm font-bold text-white hover:text-[#E1931E] transition">
                    +998 (50) 207-00-00
                  </a>
                </div>
              </div>

              <div className="bg-[#1D1714] border border-[#2B231D] p-5 rounded-2xl flex items-start space-x-4">
                <div className="p-3 bg-[#E1931E]/10 rounded-xl text-[#E1931E]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-[#9E978E] mb-1">
                    {lang === 'uz' ? 'Ish Vaqti' : lang === 'ru' ? 'Режим Работы' : 'Working Hours'}
                  </span>
                  <span className="text-xs font-semibold text-white block">
                    {lang === 'uz' ? 'Dush - Shan: 09:00 - 18:00' : lang === 'ru' ? 'Пн - Сб: 09:00 - 18:00' : 'Mon - Sat: 09:00 - 18:00'}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* CONTACT FORM (5 COLS) */}
          <div className="lg:col-span-5 bg-[#1D1714] border border-[#2B231D] p-8 sm:p-10 rounded-3xl shadow-2xl relative">
            <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-2">
              {lang === 'uz' ? 'Konsultatsiya Olish' : lang === 'ru' ? 'Получить Консультацию' : 'Request Consultation'}
            </h3>
            <p className="text-xs text-[#9E978E] mb-6 font-light">
              {lang === 'uz' 
                ? 'Ma\'lumotlaringizni qoldiring va mutaxassisimiz 15 daqiqada siz bilan bog\'lanadi.' 
                : lang === 'ru' 
                ? 'Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут.' 
                : 'Leave your details and our specialist will contact you within 15 minutes.'}
            </p>

            {submitted ? (
              <div className="bg-[#E1931E]/10 border border-[#E1931E] text-[#E1931E] p-6 rounded-2xl text-center">
                <span className="block text-lg font-bold mb-1">✓ {lang === 'uz' ? 'Rahmat!' : lang === 'ru' ? 'Спасибо!' : 'Thank you!'}</span>
                <span className="text-xs font-light">
                  {lang === 'uz' ? 'Arizangiz qabul qilindi. Tez orada bog\'lanamiz.' : lang === 'ru' ? 'Ваша заявка принята. Скоро свяжемся.' : 'Application received. We will contact you soon.'}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-[#9E978E] mb-2">
                    {lang === 'uz' ? 'Ismingiz' : lang === 'ru' ? 'Ваше Имя' : 'Your Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ali Valiyev"
                    className="w-full bg-[#140F0D] border border-[#2B231D] focus:border-[#E1931E] rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-[#9E978E] mb-2">
                    {lang === 'uz' ? 'Telefon Raqamingiz' : lang === 'ru' ? 'Номер Телефона' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+998 90 123 45 67"
                    className="w-full bg-[#140F0D] border border-[#2B231D] focus:border-[#E1931E] rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-[#9E978E] mb-2">
                    {lang === 'uz' ? 'Loyiha Haqida (Ixtiyoriy)' : lang === 'ru' ? 'О Проекте (Опционально)' : 'About Project (Optional)'}
                  </label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'uz' ? 'Masalan: Surma eshiklar hisobi...' : lang === 'ru' ? 'Например: Расчет сдвижных дверей...' : 'e.g. Sliding doors quote...'}
                    className="w-full bg-[#140F0D] border border-[#2B231D] focus:border-[#E1931E] rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E1931E] hover:bg-[#c98016] text-[#0F0C0A] font-extrabold text-xs uppercase py-4 rounded-xl transition-all duration-300 tracking-widest shadow-lg shadow-[#E1931E]/20 active:scale-[0.99]"
                >
                  {lang === 'uz' ? 'Ariza Yuborish' : lang === 'ru' ? 'Отправить Заявку' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ShowroomSection;