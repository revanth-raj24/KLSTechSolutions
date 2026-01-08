import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assests/kls-logo.png';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Products', to: '/products' },
      { name: 'Solutions', to: '/solutions' },
    ],
    services: [
      { name: 'Custom Solutions', to: '/solutions' },
      { name: 'IoT Products', to: '/products' },
    ],
    company: [
      { name: 'About Us', to: '/about' },
      { name: 'Contact', to: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', to: '#' },
      { name: 'Terms of Service', to: '#' },
    ],
  };

  return (
    <footer className="bg-kls-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className="text-sm hover:text-kls-primary transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className="text-sm hover:text-kls-primary transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className="text-sm hover:text-kls-primary transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className="text-sm hover:text-kls-primary transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <NavLink to="/" className="flex items-center gap-2">
                <img 
                  src={logo} 
                  alt="KLS Solutions Logo" 
                  className="h-24 w-auto"
                />
              </NavLink>
            </div>
            <p className="text-sm text-gray-400 text-center md:text-right">
              © {new Date().getFullYear()} KLS Tech Solutions. All rights reserved.
            </p>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              IoT • AI-Driven • Secure
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

