import React, { useState } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';
import { getNavItems } from '../constants';
import { PageId } from '../types';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = getNavItems(language);

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'km' : 'en');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-sans">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('what-we-do')}
          >
            <div className="w-12 h-12 bg-pn-cyan rounded-full flex items-center justify-center text-white font-bold text-lg">
              {t.common.pss}
            </div>
            <div className="flex flex-col">
              <span className="text-pn-cyan font-bold text-base md:text-lg leading-tight uppercase tracking-wide">{t.common.orgName}</span>
              <span className="text-gray-600 font-semibold text-xs md:text-sm uppercase tracking-wide">{t.common.orgNameSub}</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-bold uppercase tracking-wider hover:text-pn-cyan transition-colors ${
                  activePage === item.id ? 'text-pn-cyan border-b-2 border-pn-cyan' : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="h-6 w-px bg-gray-300 mx-2"></div>

            <button 
              onClick={toggleLanguage}
              className="flex items-center text-gray-600 hover:text-pn-cyan space-x-1"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-bold">{language === 'en' ? 'KH' : 'EN'}</span>
            </button>

            <button className="text-gray-500 hover:text-pn-cyan">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleNavClick('get-involved')}
              className="bg-pn-orange hover:bg-pn-orangeHover text-white px-6 py-2 rounded font-bold uppercase text-sm transition-colors"
            >
              {t.common.donate}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
             <button 
              onClick={toggleLanguage}
              className="flex items-center text-gray-600"
            >
              <Globe className="w-6 h-6" />
              <span className="ml-1 font-bold">{language === 'en' ? 'KH' : 'EN'}</span>
            </button>
            <button
              className="text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm font-bold uppercase tracking-wider ${
                  activePage === item.id ? 'text-pn-cyan' : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('get-involved')}
              className="bg-pn-orange text-white px-6 py-3 rounded font-bold uppercase text-sm text-center"
            >
              {t.common.donate}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;