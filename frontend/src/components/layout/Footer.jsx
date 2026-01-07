import React from 'react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Smart Water Monitor', href: '/water-monitor' },
      { name: 'Features', href: '/water-monitor#features' },
      { name: 'Pricing', href: '/water-monitor#pricing' },
    ],
    services: [
      { name: 'Custom Solutions', href: '/custom-solutions' },
      { name: 'Industrial Automation', href: '/custom-solutions#industrial' },
      { name: 'Home Automation', href: '/custom-solutions#home' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
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
                  <a
                    href={link.href}
                    className="text-sm hover:text-kls-primary transition-colors"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-sm hover:text-kls-primary transition-colors"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-sm hover:text-kls-primary transition-colors"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-sm hover:text-kls-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-kls-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <div>
                  <span className="text-white font-bold text-lg">KLS TECH</span>
                  <span className="text-kls-primary text-xs tracking-widest uppercase font-semibold block">
                    Solutions
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} KLS Tech Solutions. All rights reserved.
            </p>
          </div>
          <div className="mt-4 text-center md:text-left">
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

