import React from 'react';
import { Target, Eye, Globe, Award, HeartHandshake } from 'lucide-react';
import { getTimelineEvents } from '../constants';
import { useLanguage } from '../LanguageContext';

const WhoWeAre: React.FC = () => {
  const { language, t } = useLanguage();
  const events = getTimelineEvents(language);

  return (
    <div className="space-y-16 animate-fade-in">
      {/* Introduction */}
      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{t.whoWeAre.title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t.whoWeAre.intro}
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-pn-cyan/5 p-8 rounded-xl border border-pn-cyan/20">
          <div className="flex items-center mb-4">
            <Target className="w-8 h-8 text-pn-cyan mr-3" />
            <h3 className="text-2xl font-bold text-pn-cyan">{t.whoWeAre.mission}</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {t.whoWeAre.missionText}
          </p>
        </div>
        <div className="bg-pn-orange/5 p-8 rounded-xl border border-pn-orange/20">
          <div className="flex items-center mb-4">
            <Eye className="w-8 h-8 text-pn-orange mr-3" />
            <h3 className="text-2xl font-bold text-pn-orange">{t.whoWeAre.vision}</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {t.whoWeAre.visionText}
          </p>
        </div>
      </section>

      {/* Values */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">{t.whoWeAre.values}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: t.whoWeAre.valuesList.trust, icon: <HeartHandshake className="w-8 h-8 text-white" />, color: 'bg-pn-cyan' },
            { label: t.whoWeAre.valuesList.responsibility, icon: <Globe className="w-8 h-8 text-white" />, color: 'bg-pn-orange' },
            { label: t.whoWeAre.valuesList.solidarity, icon: <Award className="w-8 h-8 text-white" />, color: 'bg-gray-800' },
            { label: t.whoWeAre.valuesList.respect, icon: <Target className="w-8 h-8 text-white" />, color: 'bg-pn-cyanDark' },
          ].map((val, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className={`${val.color} w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-4 transform group-hover:scale-110 transition-transform`}>
                {val.icon}
              </div>
              <h4 className="font-bold text-lg text-gray-800">{val.label}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-gray-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <span className="w-2 h-8 bg-pn-cyan mr-3"></span>
            {t.whoWeAre.history}
        </h2>
        <div className="relative border-l-2 border-gray-200 ml-4 space-y-8">
          {events.map((event, idx) => (
            <div key={idx} className="relative pl-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pn-orange border-2 border-white shadow"></div>
              <span className="inline-block px-2 py-1 bg-pn-cyan text-white text-xs font-bold rounded mb-1">{event.year}</span>
              <h4 className="text-lg font-bold text-gray-800">{event.title}</h4>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Preview */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.whoWeAre.team}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                    <img src={`https://picsum.photos/200/200?random=${i+20}`} alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-3 object-cover border-4 border-gray-100 shadow-sm" />
                    <h5 className="font-bold text-gray-800">Team Member</h5>
                    <span className="text-xs text-pn-cyan font-bold uppercase">Position</span>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;