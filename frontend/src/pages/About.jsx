import React from 'react';
import PageHeader from '../components/common/PageHeader';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="About"
        description="Engineering-driven company focused on secure, scalable systems"
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              We are a hybrid IoT startup focused on building intelligent automation solutions 
              that transform how people interact with technology in their homes and businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl md:text-3xl font-bold text-kls-dark mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To engineer smart living solutions that are secure, AI-driven, and accessible 
                to everyone. We combine cutting-edge IoT technology with practical automation 
                to solve real-world problems.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl md:text-3xl font-bold text-kls-dark mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become a leading provider of intelligent automation systems that seamlessly 
                integrate into daily life, making homes and businesses more efficient, secure, 
                and sustainable.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

