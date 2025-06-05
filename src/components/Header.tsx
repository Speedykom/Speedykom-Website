"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 border-b border-gray-200 bg-white">
      <Link href={"/"} className="w-32 sm:w-36 md:w-40 h-8 relative">
        <Image 
          src="/speedykom-small.png" 
          alt="Logo" 
          fill
          className="object-contain"
          sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
        />
      </Link>
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-gray-800 hover:text-gray-600 font-medium transition-colors">
          Home
        </Link>
        <Link href="/solutions" className="text-gray-800 hover:text-gray-600 font-medium transition-colors">
          Solutions
        </Link>
        <Link href="/speedymesh" className="text-gray-800 hover:text-gray-600 font-medium transition-colors">
          SpeedyMesh
        </Link>
        <Link href="/about" className="text-gray-800 hover:text-gray-600 font-medium transition-colors">
          About
        </Link>
        <Link href="/contact" className="text-gray-800 hover:text-gray-600 font-medium transition-colors">
          Contact
        </Link>
      </div>
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-lg md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link 
              href="/" 
              className="text-gray-800 hover:text-gray-600 font-medium w-full text-center py-2" 
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              href="/solutions" 
              className="text-gray-800 hover:text-gray-600 font-medium w-full text-center py-2" 
              onClick={toggleMenu}
            >
              Solutions
            </Link>
            <Link 
              href="/speedymesh" 
              className="text-gray-800 hover:text-gray-600 font-medium w-full text-center py-2" 
              onClick={toggleMenu}
            >
              SpeedyMesh
            </Link>
            <Link 
              href="/about" 
              className="text-gray-800 hover:text-gray-600 font-medium w-full text-center py-2" 
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-800 hover:text-gray-600 font-medium w-full text-center py-2" 
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;