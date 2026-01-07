import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Smart Water (Product)', href: '/water-monitor' },
    { name: 'Custom Solutions', href: '/custom-solutions' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            {/* Placeholder for Logo Image - Replace with <img> tag later */}
            <div className="w-10 h-10 bg-kls-dark rounded-lg flex items-center justify-center">
              <span className="text-kls-primary font-bold text-xl">K</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-kls-dark tracking-tight">KLS TECH</span>
              <span className="text-[10px] text-kls-primary tracking-widest uppercase font-semibold">Solutions</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 hover:text-kls-primary font-medium transition-colors text-sm flex items-center gap-2"
              >
                {link.name}
                {link.badge && (
                  <span className="bg-kls-primary/10 text-kls-primary text-[10px] px-2 py-0.5 rounded-full font-bold">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <button className="bg-kls-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-kls-primary transition-colors duration-300">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-kls-primary flex justify-between items-center"
              >
                {link.name}
                {link.badge && <span className="text-xs text-kls-primary font-bold">{link.badge}</span>}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;