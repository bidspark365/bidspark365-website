
import React from 'react';
import { 
  Building2, 
  Search, 
  FileCheck, 
  ShieldCheck, 
  Target, 
  Users, 
  Presentation, 
  Factory,
  CheckCircle2,
  Award,
  Globe,
  Briefcase
} from 'lucide-react';
import { NavItem, ServiceItem, Testimonial, Stat } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "OEM Access", href: "/#oem" },
  { label: "Contact", href: "/#contact" },
];


export const SERVICES: ServiceItem[] = [
  {
    title: 'Government e-Procurement',
    icon: 'Building2',
    color: 'bg-blue-500',
    description: [
      'Portal Registration & Catalog Management',
      'Tender Discovery & Alerts',
      'Tender Submission Support',
      'DSC & Compliance Management'
    ]
  },
  {
    title: 'Tender Participation Support',
    icon: 'FileCheck',
    color: 'bg-purple-500',
    description: [
      'Bid document preparation',
      'Price strategy & competitor insights',
      'Submission management',
      'Post-submission support'
    ]
  },
  {
    title: 'Training & Workshops',
    icon: 'Presentation',
    color: 'bg-orange-500',
    description: [
      'GeM portal training',
      'Bid preparation mastery',
      'Live & online sessions'
    ]
  },
  {
    title: 'OEM Onboarding',
    icon: 'Factory',
    color: 'bg-emerald-500',
    description: [
      'Direct government department listing',
      'Government buyer network access',
      'Full compliance & eligibility support'
    ]
  }
];

export const STATS: Stat[] = [
  { label: 'Happy Clients', value: '6000+', icon: 'Users' },
  { label: 'Tenders Submitted', value: '1.8L+', icon: 'FileCheck' },
  { label: 'Specialists', value: '76+', icon: 'ShieldCheck' },
  { label: 'OEMs Onboarded', value: '500+', icon: 'Factory' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    company: 'Alpha Tech Solutions',
    industry: 'IT Infrastructure',
    quote: 'BidSpark365 transformed our approach to government tenders. Their insight into price strategy was a game changer.',
    avatar: 'https://i.pravatar.cc/150?u=rajesh'
  },
  {
    id: 2,
    name: 'Priya Verma',
    company: 'Green Build India',
    industry: 'Construction',
    quote: 'The GeM onboarding was seamless. We are now working directly with major government departments thanks to them.',
    avatar: 'https://i.pravatar.cc/150?u=priya'
  },
  {
    id: 3,
    name: 'Amit Patel',
    company: 'MediSupply Co.',
    industry: 'Healthcare',
    quote: 'Exceptional support for bid documentation. Their quality assurance process ensures we never miss a tiny detail.',
    avatar: 'https://i.pravatar.cc/150?u=amit'
  }
];
