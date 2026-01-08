import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Contact"
        description="Get in touch with our team to discuss your IoT automation needs"
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-kls-primary/10 rounded-lg mb-4">
                <Mail className="text-kls-primary" size={28} />
              </div>
              <h3 className="font-semibold text-kls-dark mb-2 text-lg">Email</h3>
              <p className="text-gray-700">contact@klstech.com</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-kls-primary/10 rounded-lg mb-4">
                <Phone className="text-kls-primary" size={28} />
              </div>
              <h3 className="font-semibold text-kls-dark mb-2 text-lg">Phone</h3>
              <p className="text-gray-700">+1 (555) 123-4567</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-kls-primary/10 rounded-lg mb-4">
                <MapPin className="text-kls-primary" size={28} />
              </div>
              <h3 className="font-semibold text-kls-dark mb-2 text-lg">Location</h3>
              <p className="text-gray-700">Your City, Country</p>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-kls-dark mb-8 text-center">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kls-primary focus:border-kls-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kls-primary focus:border-kls-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kls-primary focus:border-kls-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-kls-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-kls-primary transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

