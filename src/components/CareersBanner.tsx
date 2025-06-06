import React from 'react';

const CareersHero = () => {
  return (
    <div className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/careers-bg.png')" }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-3xl font-bold mb-4 sm:text-4xl md:text-5xl lg:text-6xl">Careers at Speedykom</h1>
        <p className="text-base px-4 leading-relaxed max-w-xl sm:text-lg sm:max-w-2xl md:text-xl md:max-w-3xl">
          At Speedykom, your work has meaningful impact. Join a passionate team that solves real-world challenges by transforming digital public infrastructure through development cooperation.
        </p>
      </div>
    </div>
  );
};

export default CareersHero;