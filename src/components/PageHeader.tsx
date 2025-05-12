
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-r from-professor-navy to-professor-navy/80 text-white py-12 md:py-20 relative overflow-hidden">
      {/* Abstract decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
            <circle cx="75" cy="25" r="15" fill="none" stroke="currentColor" strokeWidth="0.5"></circle>
            <circle cx="25" cy="75" r="15" fill="none" stroke="currentColor" strokeWidth="0.5"></circle>
            <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-professor-gold max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
