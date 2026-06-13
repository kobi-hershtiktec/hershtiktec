export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  technologies: string[];
  metrics?: string;
  accessibilityFeatures?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  techStack: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AccessibilitySettings {
  fontSizeScale: number; // 1 = normal, 1.1 = medium, 1.2 = large, 1.3 = extra large
  grayscale: boolean;
  highContrast: boolean;
  invert: boolean;
  readableFont: boolean;
  highlightLinks: boolean;
  keyboardGuide: boolean;
}
