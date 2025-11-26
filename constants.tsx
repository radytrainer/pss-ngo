import React from 'react';
import { NavItem, SidebarLink, StatItem, TimelineEvent, Article, Language, PageId } from './types';
import { GraduationCap, Users, Building2, HeartHandshake } from 'lucide-react';
import { translations } from './translations';

export const getNavItems = (lang: Language): NavItem[] => {
  const t = translations[lang].hero.titles;
  return [
    { label: t['who-we-are'], id: 'who-we-are' },
    { label: t['what-we-do'], id: 'what-we-do' },
    { label: t['impact'], id: 'impact' },
    { label: t['get-involved'], id: 'get-involved' },
    { label: t['news'], id: 'news' },
  ];
};

export const getSidebarLinks = (lang: Language): SidebarLink[] => {
  const t = translations[lang];
  return [
    { label: t.whoWeAre.mission, pageId: 'who-we-are' },
    { label: t.whatWeDo.program, pageId: 'what-we-do' },
    { label: t.impact.title, pageId: 'impact' },
    { label: t.getInvolved.cards.corporate.title, pageId: 'get-involved' },
    { label: t.footer.centers, href: '#' },
  ];
};

export const getKeyStats = (lang: Language): StatItem[] => {
  // Mock data translation
  const labels = {
    en: ['Young people trained', 'Female students', 'Found a job within 2 months', 'Average first salary'],
    km: ['យុវជនត្រូវបានបណ្តុះបណ្តាល', 'សិស្សស្រី', 'ទទួលបានការងារក្នុងរយៈពេល ២ ខែ', 'ប្រាក់ខែដំបូងជាមធ្យម']
  };
  
  const currentLabels = labels[lang];

  return [
    { 
      value: '1,500+', 
      label: currentLabels[0],
      icon: <GraduationCap className="w-8 h-8 text-pn-cyan mb-2" />
    },
    { 
      value: '50%', 
      label: currentLabels[1],
      icon: <Users className="w-8 h-8 text-pn-cyan mb-2" />
    },
    { 
      value: '90%', 
      label: currentLabels[2],
      icon: <Building2 className="w-8 h-8 text-pn-cyan mb-2" />
    },
    { 
      value: '$350', 
      label: currentLabels[3],
      icon: <HeartHandshake className="w-8 h-8 text-pn-cyan mb-2" />
    },
  ];
};

export const getTimelineEvents = (lang: Language): TimelineEvent[] => {
  if (lang === 'km') {
    return [
      { year: '២០០៥', title: 'ការបង្កើតមូលនិធិ', description: 'PSS ត្រូវបានបង្កើតឡើងនៅកម្ពុជាដើម្បីកាត់បន្ថយគម្លាតឌីជីថល។' },
      { year: '២០១០', title: 'ការពង្រីក', description: 'ថ្នាក់ដែលបានបញ្ចប់ការសិក្សាដំបូងឈានដល់ ១០០ នាក់ក្នុងមួយឆ្នាំ។' },
      { year: '២០១៥', title: 'មជ្ឈមណ្ឌលថ្មី', description: 'បានផ្លាស់ទៅមជ្ឈមណ្ឌលបណ្តុះបណ្តាលធំជាងមុននៅភ្នំពេញ។' },
      { year: '២០២៣', title: 'បច្ចុប្បន្នភាពកម្មវិធីសិក្សា', description: 'បានចាប់ផ្តើមជំនាញថ្មីលើ Cloud Computing និង Cybersecurity ។' },
    ];
  }
  return [
    { year: '2005', title: 'Foundation', description: 'Promoting Skills for Success is founded in Cambodia to bridge the digital divide.' },
    { year: '2010', title: 'Expansion', description: 'First graduating class reaches 100 students per year.' },
    { year: '2015', title: 'New Center', description: 'Moved to a larger training center in Phnom Penh to accommodate growing demand.' },
    { year: '2023', title: 'Curriculum Update', description: 'Launched new specializations in Cloud Computing and Cybersecurity.' },
  ];
};

export const getNewsArticles = (lang: Language): Article[] => {
  if (lang === 'km') {
    return [
      {
        id: 1,
        title: 'ពិធីប្រគល់សញ្ញាបត្រជំនាន់ឆ្នាំ ២០២៤',
        date: '១៥ តុលា ២០២៤',
        category: 'ព្រឹត្តិការណ៍',
        image: 'https://picsum.photos/600/400?random=10',
        excerpt: 'អបអរសាទរនិស្សិតបញ្ចប់ការសិក្សាថ្មីចំនួន ៩៨ នាក់ដែលត្រៀមខ្លួនរួចជាស្រេចដើម្បីចូលក្នុងវិស័យការងារឌីជីថល។'
      },
      {
        id: 2,
        title: 'ភាពជាដៃគូថ្មីជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យាយក្ស',
        date: '២៨ កញ្ញា ២០២៤',
        category: 'ភាពជាដៃគូ',
        image: 'https://picsum.photos/600/400?random=11',
        excerpt: 'យើងមានក្តីរំភើបក្នុងការប្រកាសពីភាពជាដៃគូយុទ្ធសាស្ត្រដើម្បីកែលម្អកម្មវិធីសិក្សា Cloud របស់យើង។'
      },
      {
        id: 3,
        title: 'ដំណើរការជ្រើសរើសឆ្នាំ ២០២៥ ចាប់ផ្តើម',
        date: '១០ កញ្ញា ២០២៤',
        category: 'ការទទួលសិស្ស',
        image: 'https://picsum.photos/600/400?random=12',
        excerpt: 'ក្រុមការងាររបស់យើងកំពុងធ្វើដំណើរទៅកាន់ ១៨ ខេត្តដើម្បីស្វែងរកទេពកោសល្យផ្នែកព័ត៌មានវិទ្យាជំនាន់ក្រោយ។'
      }
    ];
  }
  return [
    {
      id: 1,
      title: 'Class of 2024 Graduation Ceremony',
      date: 'Oct 15, 2024',
      category: 'Events',
      image: 'https://picsum.photos/600/400?random=10',
      excerpt: 'Celebrating 98 new graduates who are ready to enter the digital workforce.'
    },
    {
      id: 2,
      title: 'New Partnership with Tech Giant',
      date: 'Sep 28, 2024',
      category: 'Partnership',
      image: 'https://picsum.photos/600/400?random=11',
      excerpt: 'We are thrilled to announce a strategic partnership to improve our cloud curriculum.'
    },
    {
      id: 3,
      title: 'Selection Process 2025 Begins',
      date: 'Sep 10, 2024',
      category: 'Admissions',
      image: 'https://picsum.photos/600/400?random=12',
      excerpt: 'Our team is traveling to 18 provinces to find the next generation of IT talents.'
    }
  ];
};