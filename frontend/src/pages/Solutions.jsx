import React from 'react';
import PageHeader from '../components/common/PageHeader';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Solutions"
        description="Custom-built IoT & automation solutions for businesses"
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              We deliver tailored IoT and automation systems engineered to your specific 
              business requirements. Our solutions are built with security, scalability, 
              and reliability as core principles, ensuring seamless integration into your 
              existing infrastructure.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Solutions;

