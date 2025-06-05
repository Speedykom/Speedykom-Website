import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <div className="inline-block mb-4 sm:mb-6 rounded-full border border-gray-300 px-4 sm:px-5 py-1.5 sm:py-2 text-gray-700 text-xs sm:text-sm">
            Digital Solutions for Development
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Speedykom: Digital Infrastructure for Future Societies
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
            We help governments and development actors design and build digital systems that deliver lasting public impact.
          </p>
          <Button className="w-full sm:w-auto bg-[#56A09A] hover:bg-teal-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md text-base sm:text-lg transition-colors duration-200">
            Get in Touch
          </Button>
        </div>

        {/* Image Container */}
        <div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96 mt-8 lg:mt-0">
          <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden">
            <Image 
              src="/hero.png" 
              alt="Placeholder" 
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}