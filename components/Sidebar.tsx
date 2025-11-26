import React from 'react';
import { getSidebarLinks } from '../constants';
import { ChevronRight } from 'lucide-react';
import { PageId } from '../types';
import { useLanguage } from '../LanguageContext';

interface SidebarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate }) => {
  const { language, t } = useLanguage();
  const sidebarLinks = getSidebarLinks(language);

  return (
    <div className="space-y-8">
      <div className="bg-pn-gray p-6 rounded shadow-sm">
        <h3 className="text-xl font-bold text-pn-cyan mb-6 pb-2 border-b-2 border-gray-200">
          {t.sidebar.explore}
        </h3>
        <ul className="space-y-1">
          {sidebarLinks.map((link, index) => {
             const isActive = link.pageId === activePage;
             return (
              <li key={index}>
                <button
                  onClick={() => link.pageId && onNavigate(link.pageId)}
                  className={`w-full flex items-center justify-between p-3 rounded transition-all ${
                    isActive
                      ? 'bg-pn-cyan text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-200 hover:text-pn-cyan'
                  }`}
                >
                  <span className="font-medium text-sm uppercase tracking-wide text-left">{link.label}</span>
                  {!isActive && <ChevronRight className="w-4 h-4 flex-shrink-0" />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="bg-white p-6 rounded shadow-md border-t-4 border-pn-orange">
        <h4 className="font-bold text-lg mb-3">{t.sidebar.supportTitle}</h4>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {t.sidebar.supportText}
        </p>
        <button 
          onClick={() => onNavigate('get-involved')}
          className="w-full bg-pn-orange hover:bg-pn-orangeHover text-white font-bold py-3 px-4 rounded transition-colors uppercase text-sm"
        >
          {t.common.donateNow}
        </button>
      </div>
      
      <div>
         <img 
            src="https://picsum.photos/400/300?random=99" 
            alt="Students in class" 
            className="w-full rounded shadow-md mb-4"
         />
         <div className="bg-pn-cyan text-white p-4 rounded text-center cursor-pointer hover:bg-pn-cyanDark transition-colors">
            <span className="font-bold uppercase tracking-wider block">{t.common.downloadBrochure}</span>
         </div>
      </div>
    </div>
  );
};

export default Sidebar;