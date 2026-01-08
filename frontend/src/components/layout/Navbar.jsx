import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assests/kls-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Products', to: '/products' },
    { name: 'Solutions', to: '/solutions' },
    { name: 'About', to: '/about' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-#FFFFFF/95 backdrop-blur-md border-b border-kls-primary/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <NavLink to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <img 
              src={logo} 
              alt="KLS Solutions Logo" 
              className="h-20 w-auto"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-300 hover:text-white font-medium transition-colors text-sm ${
                    isActive ? 'text-kls-primary' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink 
              to="/contact"
              className="bg-kls-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-kls-primary/80 transition-colors duration-300 shadow-md"
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-kls-dark border-t border-kls-primary/20 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive 
                      ? 'text-kls-primary bg-kls-primary/10' 
                      : 'text-gray-300 hover:bg-kls-primary/10 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-white bg-kls-primary hover:bg-kls-primary/80 transition-colors text-center"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;