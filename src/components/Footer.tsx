import React from 'react';
import Image from 'next/image';
import { Facebook, Youtube, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <Image
                  src="/speedykom-small.png"
                  alt="SpeedyKom Logo"
                  width={180}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Innovative IT solutions tailored to your needs. Let&apos;s build the future together.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <a href="/solutions" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Platforms</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm">
                  SpeedyMesh
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm">
                  RePan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm">
                  ALsuite
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm">
                  ICT4Renewables
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm">
                  CLAPS EHR
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="text-gray-600 text-sm">
                <p>Henkestr. 91, DE- 91052</p>
                <p>Erlangen Germany</p>
              </div>
              <div>
                <a 
                  href="mailto:hello@speedykom.de" 
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm"
                >
                  hello@speedykom.de
                </a>
              </div>
              <div>
                <a 
                  href="tel:+4991311230366" 
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm"
                >
                  +49 9131 123 0366
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-gray-600 hover:text-teal-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-teal-600 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-teal-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="text-gray-600 text-sm">
              Copyright © 2025 SpeedyKom
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;