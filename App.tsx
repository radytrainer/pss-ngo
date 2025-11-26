import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Sidebar from './components/Sidebar';
import ContentSection from './components/ContentSection';
import WhoWeAre from './components/WhoWeAre';
import Impact from './components/Impact';
import GetInvolved from './components/GetInvolved';
import News from './components/News';
import Footer from './components/Footer';
import { PageId } from './types';
import { getNavItems } from './constants';
import { LanguageProvider, useLanguage } from './LanguageContext';

const AppContent: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('what-we-do');
  const { language, t } = useLanguage();

  const getPageTitle = (id: PageId) => {
    const item = getNavItems(language).find(n => n.id === id);
    return item ? item.label : t.common.orgFullName;
  };

  const renderContent = () => {
    switch (activePage) {
      case 'who-we-are':
        return <WhoWeAre />;
      case 'what-we-do':
        return <ContentSection />;
      case 'impact':
        return <Impact />;
      case 'get-involved':
        return <GetInvolved />;
      case 'news':
        return <News />;
      default:
        return <ContentSection />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header 
        activePage={activePage} 
        onNavigate={setActivePage} 
      />
      
      <main className="flex-grow">
        <Hero 
          page={activePage} 
          title={getPageTitle(activePage)} 
        />
        
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Main Content Column */}
            <div className={`${activePage === 'get-involved' ? 'lg:col-span-12' : 'lg:col-span-8'}`}>
              {renderContent()}
              
              {/* Show Stats only on specific pages to avoid clutter */}
              {activePage === 'what-we-do' && <Stats />}
            </div>

            {/* Sidebar Column - Hide on 'Get Involved' for full width */}
            {activePage !== 'get-involved' && (
              <aside className="lg:col-span-4 space-y-8">
                <div className="sticky top-24">
                  <Sidebar activePage={activePage} onNavigate={setActivePage} />
                </div>
              </aside>
            )}
            
          </div>
        </div>
        
        {/* Call to Action Banner - Hidden on Get Involved since it's redundant */}
        {activePage !== 'get-involved' && (
          <div className="bg-pn-cyan py-12">
            <div className="container mx-auto px-4 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
              <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
                {t.cta.desc}
              </p>
              <button 
                onClick={() => setActivePage('get-involved')}
                className="bg-white text-pn-cyan hover:bg-gray-100 font-bold py-3 px-8 rounded shadow-lg uppercase tracking-wide transition-all transform hover:-translate-y-1"
              >
                {t.cta.btn}
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;