export interface NavLink {
  name: string;
  path: string;
  subLinks?: NavLink[];
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  domain: 'bfsi' | 'automotive';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'whitepaper' | 'case-study' | 'blog';
  image: string;
  description: string;
  date: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  type: 'webinar' | 'conference' | 'workshop';
}