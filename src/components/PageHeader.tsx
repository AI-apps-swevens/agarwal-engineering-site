
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-r from-professor-navy to-professor-navy/80 text-white py-10 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-professor-gold">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
