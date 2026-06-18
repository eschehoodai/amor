export interface TattooItem {
  id: string;
  title: string;
  style: 'Blackwork' | 'Fineline' | 'Traditional' | 'Calligraphy' | 'Wikingisch' | 'Anime' | 'Realismus' | 'Lettering' | 'Ornamental';
  imageUrl: string;
  description: string;
  artist: string;
  size: string; // e.g., "15x10 cm"
  duration: string; // e.g., "3 Stunden"
  date: string;
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  specialties: string[];
  languages: string[];
  instagram: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
  style: string;
}
