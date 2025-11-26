export type PageId = 'who-we-are' | 'what-we-do' | 'impact' | 'get-involved' | 'news';
export type Language = 'en' | 'km';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface SidebarLink {
  label: string;
  pageId?: PageId; // Optional link to a specific internal page
  href?: string;   // Optional external link or hash
}

export interface Article {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
}