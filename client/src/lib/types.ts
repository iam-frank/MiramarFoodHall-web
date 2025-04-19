export interface Vendor {
  id: number;
  name: string;
  description: string;
  logoUrl: string | null;
  websiteUrl: string | null;
  cuisineType: string;
  locationNumber: number;
  floorPlanX: number;
  floorPlanY: number;
}

export interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  featured: boolean;
  imageUrl: string | null;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterSubscription {
  email: string;
}
