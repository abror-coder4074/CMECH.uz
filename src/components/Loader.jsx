import React, { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const letters = ['C', 'M', 'E', 'C', 'H'];

  useEffect(() => {
    // Har ehtimolga qarshi yuklanayotganda ham eng tepaga olib chiqadi
    window.scrollTo(0, 0);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    const completeTimer = setTimeout(() => {
      window.scrollTo(0, 0); // Sayt ochilishi bilan ham eng tepada bo'ladi
      if (onComplete) onComplete();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#1B1310] flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)] ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div className="absolute w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-[160px] pointer-events-none animate-pulse duration-[3000ms]" />

      <div className="relative flex items-center space-x-2 sm:space-x-4 z-10 select-none">
        {letters.map((char, index) => {
          const delay = index * 0.18;
          return (
            <span
              key={index}
              style={{ animationDelay: `${delay}s` }}
              className="font-serif text-6xl sm:text-8xl md:text-9xl font-bold text-[#F59E0B] tracking-wider inline-block opacity-0 animate-smoothLetter drop-shadow-[0_10px_25px_rgba(245,158,11,0.15)]"
            >
              {char}
            </span>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes smoothLetter {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
            filter: blur(12px);
          }
          50% {
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }
        .animate-smoothLetter {
          animation: smoothLetter 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Loader;