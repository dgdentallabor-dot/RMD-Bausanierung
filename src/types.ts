export interface Service {
  id: string;
  title: string;
  category: 'Interior' | 'Exterior' | 'General';
  description: string;
  longDescription: string;
  image: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  beforeImage?: string;
  location: string;
  year: string;
  size?: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  projectType: string;
  location: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TimelineStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  iconName: string;
}

export interface LeadForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  agreeToPrivacy: boolean;
}
