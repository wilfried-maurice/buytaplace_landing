import { ReactNode } from 'react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  imagePosition: 'left' | 'right';
  mockupType: 'search' | 'payment' | 'ticket';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Partner {
  name: string;
  logo: string;
}