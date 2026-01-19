
export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string[];
  icon: string;
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  industry: string;
  quote: string;
  avatar: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}
