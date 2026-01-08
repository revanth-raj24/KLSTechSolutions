import React from 'react';

const PageHeader = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-r from-kls-dark via-kls-dark to-kls-primary/20 text-white py-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{title}</h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

