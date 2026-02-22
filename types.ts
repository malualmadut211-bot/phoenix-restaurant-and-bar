export interface NavItem {
  label: string;
  path: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
  tag?: string;
  category: string;
}

export interface Review {
  id: string;
  name: string;
  timeAgo: string;
  rating: number;
  text: string;
  avatar?: string;
  avatarText?: string;
  tags?: string[];
  image?: string;
}

export interface Event {
  id: string;
  day: string;
  time: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string;
  image: string;
  icon: string;
  highlight?: boolean;
}

export interface Offer {
  id: string;
  day: string;
  title: string;
  subtitle?: string;
  time: string;
  type: 'Day' | 'Night';
  description: string;
  icon: string;
  image?: string;
  accentColor?: string;
  gradient?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  title?: string;
}