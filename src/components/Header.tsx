'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <Image 
          alt="Speedykom Logo" 
          className="h-8 mr-2" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhxs8b9W518aF7xQA3mYsO_ossYV_DgOEDNWvEfNFVJxFDZDSVFZgYuy1oycJ90fQpbLk0VjshDHvGiWnJ8QNQ2d5mN_eB1ZvKEifu761rrYu1jft1x0Rz9YbK-cO2i8vdtTJKQW_wMzMbHLl3LuoH-sG6dxlnPqD9LRrxqUkZXQ_-SDgpapJe0ntenGNBsqNPrO1lSa6tKIST3ebahHTWbPhAhfrZ8dMWdasByqngabo4M98DRbcwqiMGrcktnyjyO_YYMowkQzo"
          width={32}
          height={32}
        />
        <span className="font-bold text-xl text-gray-700">SPEEDYKOM</span>
      </div>
      <nav className="hidden md:flex space-x-8">
        <a className="text-gray-600 hover:text-teal-500 transition-colors" href="#">Home</a>
        <a className="text-gray-600 hover:text-teal-500 transition-colors" href="#">Solutions</a>
        <a className="text-gray-600 hover:text-teal-500 transition-colors" href="#">SpeedyMesh</a>
        <a className="text-gray-600 hover:text-teal-500 transition-colors" href="#">About</a>
        <a className="text-gray-600 hover:text-teal-500 transition-colors" href="#">Contact</a>
      </nav>
      <button 
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="material-icons">menu</span>
      </button>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <nav className="flex flex-col space-y-4 p-4">
            <a className="text-gray-600 hover:text-teal-500 transition-colors" href="#">Home</a>
            <a className="text-gray-600 hover:text-teal-500 transition-colors" href="#">Solutions</a>
            <a className="text-gray-600 hover:text-teal-500 transition-colors" href="#">SpeedyMesh</a>
            <a className="text-gray-600 hover:text-teal-500 transition-colors" href="#">About</a>
            <a className="text-gray-600 hover:text-teal-500 transition-colors" href="#">Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}