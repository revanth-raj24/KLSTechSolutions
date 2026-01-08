import React from 'react';
import PageHeader from '../components/common/PageHeader';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Smart Living, Engineered"
        description="Transforming homes and businesses with intelligent IoT solutions built for security, scalability, and seamless automation."
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              KLS Tech Solutions specializes in engineering secure, AI-driven IoT systems 
              that integrate seamlessly into your daily operations. Our focus is on building 
              robust automation platforms designed for enterprise reliability.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

