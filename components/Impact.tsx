import React from 'react';
import { getKeyStats } from '../constants';
import { useLanguage } from '../LanguageContext';

const Impact: React.FC = () => {
  const { language, t } = useLanguage();
  const stats = getKeyStats(language);

  return (
    <div className="space-y-16 animate-fade-in">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.impact.title}</h2>
        <p className="text-gray-600 leading-relaxed">
            {t.impact.intro}
        </p>
      </div>

      {/* Main Stats Reuse */}
      <div className="bg-pn-gray p-8 rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded shadow-sm">
                {stat.icon}
                <span className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</span>
                <span className="text-sm text-gray-600 font-medium uppercase tracking-wide">{stat.label}</span>
                </div>
            ))}
        </div>
      </div>

      {/* Salary Progression Chart Simulation */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-2 h-8 bg-pn-orange mr-3"></span>
            {t.impact.economic}
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 space-y-6">
                <p className="text-gray-600">
                    {t.impact.economicText} <strong className="text-pn-cyan">{t.impact.economicHighlight}</strong> {t.impact.economicText2}
                </p>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-sm font-bold text-gray-600 mb-1">
                            <span>{t.impact.before}</span>
                            <span>$50 / month</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div className="bg-gray-400 h-4 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm font-bold text-pn-cyan mb-1">
                            <span>{t.impact.after}</span>
                            <span>$350 / month</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div className="bg-pn-cyan h-4 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm font-bold text-pn-orange mb-1">
                            <span>{t.impact.later}</span>
                            <span>$600+ / month</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div className="bg-pn-orange h-4 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                 <img src="https://picsum.photos/600/400?random=50" alt="Alumni working" className="rounded-xl shadow-lg" />
            </div>
        </div>
      </section>

      {/* Alumni Story */}
      <section className="bg-pn-cyan text-white rounded-xl p-8 md:p-12 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <img src="https://picsum.photos/200/200?random=51" alt="Sophea" className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl object-cover" />
            <div>
                <h3 className="text-2xl font-bold mb-2">{t.impact.alumniTitle}</h3>
                <p className="text-lg italic opacity-90 mb-4">{t.impact.alumniQuote}</p>
                <span className="font-bold bg-white/20 px-4 py-1 rounded-full text-sm">{t.impact.workingAt}</span>
            </div>
        </div>
      </section>

      {/* Partners */}
      <section>
          <h2 className="text-center text-xl font-bold text-gray-500 uppercase tracking-wide mb-8">{t.impact.partners}</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 opacity-60">
             {[1,2,3,4,5].map(n => (
                 <div key={n} className="h-12 bg-gray-300 rounded animate-pulse"></div>
             ))}
          </div>
      </section>
    </div>
  );
};

export default Impact;