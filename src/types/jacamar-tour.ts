interface JacamarTour {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Extreme';
  category: 'Hiking' | 'Adrenaline' | 'Water' | 'Wildlife' | 'Relax' | 'Cultural';
  highlights: string[];
  images: string[];
  included: string[];
  whatToBring: string[];
  ageRestriction?: string;
  weightLimit?: string;
  groupSize?: string;
  departureInfo?: string;
  isResale: true;
  provider: 'jacamar';
}

// Export the interface for use in other files
export { JacamarTour };

export default JacamarTour;