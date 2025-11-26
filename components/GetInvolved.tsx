import React from 'react';
import { Heart, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const GetInvolved: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-16 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.getInvolved.title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t.getInvolved.intro}
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Donate */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-pn-orange/10 rounded-full flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-pn-orange" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{t.getInvolved.cards.donate.title}</h3>
          <p className="text-gray-600 mb-6 text-sm flex-grow">
            {t.getInvolved.cards.donate.desc}
          </p>
          <button className="w-full bg-pn-orange hover:bg-pn-orangeHover text-white font-bold py-2 px-4 rounded transition-colors">
            {t.getInvolved.cards.donate.btn}
          </button>
        </div>

        {/* Volunteer */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-pn-cyan/10 rounded-full flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-pn-cyan" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{t.getInvolved.cards.volunteer.title}</h3>
          <p className="text-gray-600 mb-6 text-sm flex-grow">
             {t.getInvolved.cards.volunteer.desc}
          </p>
          <button className="w-full border-2 border-pn-cyan text-pn-cyan hover:bg-pn-cyan hover:text-white font-bold py-2 px-4 rounded transition-colors">
             {t.getInvolved.cards.volunteer.btn}
          </button>
        </div>

        {/* Corporate */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Briefcase className="w-8 h-8 text-gray-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{t.getInvolved.cards.corporate.title}</h3>
          <p className="text-gray-600 mb-6 text-sm flex-grow">
            {t.getInvolved.cards.corporate.desc}
          </p>
          <button className="w-full border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white font-bold py-2 px-4 rounded transition-colors">
            {t.getInvolved.cards.corporate.btn}
          </button>
        </div>
      </div>

      {/* Simple Form */}
      <section className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.getInvolved.form.title}</h3>
          <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder={t.getInvolved.form.firstName} className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-pn-cyan outline-none" />
                  <input type="text" placeholder={t.getInvolved.form.lastName} className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-pn-cyan outline-none" />
              </div>
              <input type="email" placeholder={t.getInvolved.form.email} className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-pn-cyan outline-none" />
              <textarea placeholder={t.getInvolved.form.message} rows={4} className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-pn-cyan outline-none"></textarea>
              <button type="button" className="w-full bg-pn-cyan hover:bg-pn-cyanDark text-white font-bold py-3 rounded transition-colors">
                  {t.getInvolved.form.send}
              </button>
          </form>
      </section>
    </div>
  );
};

export default GetInvolved;