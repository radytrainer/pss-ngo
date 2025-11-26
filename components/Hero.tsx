import React from 'react';
import { PageId } from '../types';
import { useLanguage } from '../LanguageContext';

interface HeroProps {
  page: PageId;
  title: string;
}

const Hero: React.FC<HeroProps> = ({ page, title }) => {
  const { t } = useLanguage();

  const getBackgroundImage = (p: PageId) => {
    switch (p) {
      case 'who-we-are': return 'https://picsum.photos/1920/800?grayscale&blur=2&random=1';
      case 'impact': return 'https://picsum.photos/1920/800?grayscale&blur=2&random=2';
      case 'get-involved': return 'https://picsum.photos/1920/800?grayscale&blur=2&random=3';
      case 'news': return 'https://picsum.photos/1920/800?grayscale&blur=2&random=4';
      default: return 'https://picsum.photos/1920/800?grayscale&blur=2';
    }
  };

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-[400px] bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60 transition-all duration-700"
        style={{ backgroundImage: `url('${getBackgroundImage(page)}')` }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

      <div className="relative container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
          {title}
        </h1>
        <div className="flex items-center text-white/90 text-sm md:text-base space-x-2">
          <span className="hover:text-pn-orange cursor-pointer">{t.common.home}</span>
          <span>&gt;</span>
          <span className="font-semibold text-pn-cyan">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;