import React from 'react';
import { getNewsArticles } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const News: React.FC = () => {
  const { language, t } = useLanguage();
  const articles = getNewsArticles(language);

  return (
    <div className="space-y-12 animate-fade-in">
        <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-3xl font-bold text-gray-800">{t.news.title}</h2>
            <div className="flex space-x-2">
                <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-bold text-gray-600 hover:bg-pn-cyan hover:text-white transition-colors">{t.news.filterAll}</button>
                <button className="px-4 py-2 bg-white border rounded-full text-sm font-bold text-gray-600 hover:bg-pn-cyan hover:text-white transition-colors">{t.news.filterEvents}</button>
                <button className="px-4 py-2 bg-white border rounded-full text-sm font-bold text-gray-600 hover:bg-pn-cyan hover:text-white transition-colors">{t.news.filterStories}</button>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
                <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
                    <div className="h-48 overflow-hidden relative group">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                        />
                        <span className="absolute top-4 right-4 bg-pn-orange text-white text-xs font-bold px-2 py-1 rounded">
                            {article.category}
                        </span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center text-gray-400 text-xs mb-3">
                            <Calendar className="w-3 h-3 mr-1" />
                            {article.date}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight hover:text-pn-cyan cursor-pointer transition-colors">
                            {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 flex-grow">
                            {article.excerpt}
                        </p>
                        <button className="flex items-center text-pn-cyan font-bold text-sm hover:text-pn-cyanDark mt-auto">
                            {t.common.readMore} <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                </div>
            ))}
        </div>

        <div className="text-center pt-8">
            <button className="border-2 border-gray-300 text-gray-600 font-bold py-2 px-8 rounded hover:border-pn-cyan hover:text-pn-cyan transition-colors">
                {t.news.loadMore}
            </button>
        </div>
    </div>
  );
};

export default News;