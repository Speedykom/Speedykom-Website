import React from 'react';
import Image from 'next/image';

const CTASection = () => {
  return (
    <section className="relative min-h-[400px] bg-gray-50 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 opacity-30">
          <Image 
            src="/cta-1.png" 
            alt="Background pattern" 
            width={300}
            height={300}
            className="object-contain"
            priority={false}
          />
        </div>
        <div className="absolute top-0 right-0 opacity-30">
          <Image 
            src="/cta-2.png" 
            alt="Background pattern" 
            width={300}
            height={300}
            className="object-contain"
            priority={false}
          />
        </div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          We look forward to working with you
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Together we can create tools that catalyse sustainable change.
        </p>
        
        <button className="bg-teal-600 hover:[#56A09A] text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 text-lg">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default CTASection;