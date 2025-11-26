
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-pn-cyan rounded-full flex items-center justify-center font-bold text-sm">{t.common.pss}</div>
              <span className="font-bold text-lg">{t.common.orgFullName}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t.footer.desc}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-pn-cyan">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">{t.hero.titles['who-we-are']}</a></li>
              <li><a href="#" className="hover:text-white">{t.hero.titles['impact']}</a></li>
              <li><a href="#" className="hover:text-white">{t.common.financialTransparency}</a></li>
              <li><a href="#" className="hover:text-white">{t.common.contactUs}</a></li>
              <li><a href="#" className="hover:text-white">{t.common.privacyPolicy}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-pn-cyan">{t.footer.centers}</h4>
            <div className="text-sm text-gray-400 space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 text-pn-orange" />
                <span className="leading-relaxed">
                  {t.footer.address}
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-pn-orange" />
                <span>
                  {t.footer.phone}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 flex-shrink-0 text-pn-orange" />
                <span>
                  {t.footer.hours}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-pn-cyan">{t.footer.newsletter}</h4>
            <p className="text-sm text-gray-400 mb-4">{t.footer.newsletterText}</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder={t.getInvolved.form.email} 
                className="bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pn-cyan"
              />
              <button className="bg-pn-cyan hover:bg-pn-cyanDark text-white px-4 py-2 rounded font-bold uppercase text-sm transition-colors">
                {t.footer.subscribe}
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
