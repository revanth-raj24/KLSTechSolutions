import React from 'react';
import PageHeader from '../components/common/PageHeader';

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Products"
        description="Our IoT products currently under research & development"
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              We are actively developing innovative IoT products designed to address 
              real-world automation challenges. Our engineering team is focused on 
              creating secure, scalable solutions that meet enterprise standards.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;

