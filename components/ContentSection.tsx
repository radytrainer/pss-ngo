import React from 'react';
import { MapPin, CheckCircle, GraduationCap, Briefcase, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const ContentSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Introduction */}
      <div className="prose max-w-none text-gray-600">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t.whatWeDo.title}</h2>
        <p className="text-lg leading-relaxed">
          <span className="font-bold text-pn-cyan text-xl">{t.whatWeDo.introPrefix}</span>
          {t.whatWeDo.intro}
        </p>
      </div>

      {/* Context */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="w-2 h-8 bg-pn-orange mr-3"></span>
          {t.whatWeDo.context}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
                <p className="leading-relaxed text-gray-600">
                {t.whatWeDo.contextP1}
                </p>
                <p className="leading-relaxed text-gray-600">
                {t.whatWeDo.contextP2}
                </p>
            </div>
            <img src="https://picsum.photos/600/400?random=1" alt="Rural Cambodia Context" className="rounded-lg shadow-lg w-full h-64 object-cover transform hover:scale-[1.02] transition-transform" />
        </div>
      </div>

      {/* Selection Process */}
      <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-2 h-8 bg-pn-cyan mr-3"></span>
            {t.whatWeDo.selection}
        </h2>
        <p className="mb-6 text-gray-600">
            {t.whatWeDo.selectionIntro}
        </p>
        <div className="grid md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((step) => {
              // @ts-ignore - Indexing with number is fine here for simplicity
              const item = t.whatWeDo.steps[step];
              return (
                <div key={step} className="bg-white p-4 rounded shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow cursor-default">
                    <div className="absolute top-0 right-0 bg-gray-100 text-gray-300 font-bold text-6xl -mt-2 -mr-2 opacity-50 group-hover:text-pn-cyan group-hover:opacity-20 transition-all">{step}</div>
                    <h3 className="font-bold text-lg mb-2 relative z-10 text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600 relative z-10">{item.desc}</p>
                </div>
              );
            })}
        </div>
      </div>

      {/* Training Program */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-2 h-8 bg-pn-orange mr-3"></span>
            {t.whatWeDo.program}
        </h2>
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-sm p-2 border border-gray-100">
                <div className="md:w-1/3">
                    <img src="https://picsum.photos/400/300?random=2" alt="IT Training" className="rounded shadow w-full h-full object-cover" />
                </div>
                <div className="md:w-2/3 p-4">
                    <h3 className="text-xl font-bold text-pn-cyan mb-2">{t.whatWeDo.techTraining}</h3>
                    <p className="text-gray-600 mb-4">
                        {t.whatWeDo.techIntro}
                    </p>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-pn-cyan mr-2 mt-1 flex-shrink-0" />
                            <span><strong>{t.whatWeDo.sna}:</strong> {t.whatWeDo.snaDesc}</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-pn-cyan mr-2 mt-1 flex-shrink-0" />
                            <span><strong>{t.whatWeDo.wep}:</strong> {t.whatWeDo.wepDesc}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-6 bg-white rounded-lg shadow-sm p-2 border border-gray-100">
                <div className="md:w-1/3">
                    <img src="https://picsum.photos/400/300?random=3" alt="Soft Skills" className="rounded shadow w-full h-full object-cover" />
                </div>
                <div className="md:w-2/3 p-4">
                    <h3 className="text-xl font-bold text-pn-cyan mb-2">{t.whatWeDo.holistic}</h3>
                    <p className="text-gray-600 mb-4">
                        {t.whatWeDo.holisticIntro}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center p-3 bg-gray-50 rounded group hover:bg-gray-100 transition-colors">
                            <GraduationCap className="w-5 h-5 text-pn-orange mr-3 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-semibold">{t.whatWeDo.softSkills.english}</span>
                        </div>
                        <div className="flex items-center p-3 bg-gray-50 rounded group hover:bg-gray-100 transition-colors">
                            <Briefcase className="w-5 h-5 text-pn-orange mr-3 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-semibold">{t.whatWeDo.softSkills.pld}</span>
                        </div>
                        <div className="flex items-center p-3 bg-gray-50 rounded group hover:bg-gray-100 transition-colors">
                            <HeartHandshake className="w-5 h-5 text-pn-orange mr-3 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-semibold">{t.whatWeDo.softSkills.ethics}</span>
                        </div>
                        <div className="flex items-center p-3 bg-gray-50 rounded group hover:bg-gray-100 transition-colors">
                            <MapPin className="w-5 h-5 text-pn-orange mr-3 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-semibold">{t.whatWeDo.softSkills.dorm}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;