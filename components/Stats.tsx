import React from 'react';
import { getKeyStats } from '../constants';
import { useLanguage } from '../LanguageContext';

const Stats: React.FC = () => {
  const { language } = useLanguage();
  const stats = getKeyStats(language);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12 py-8 border-y border-gray-200">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center text-center p-2">
          {stat.icon}
          <span className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</span>
          <span className="text-sm text-gray-600 font-medium uppercase tracking-wide">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;