export interface Tour {
  id: string;
  slug: string;
  title: string;
  price: number;
  priceChildren?: number;
  netPrice?: number;
  netPriceChildren?: number;
  minAge?: number;
  schedule?: string[];
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  description: string;
  highlights: string[];
  image: string;
  images?: string[];
  logo?: string;
  isResale: boolean;
  category: 'Hiking' | 'Adrenaline' | 'Water' | 'Wildlife' | 'Relax';
}

export const tours: Tour[] = [
  // ========================
  // LOCAL / PROPIO (Mis Tours)
  // ========================
  {
    id: 'tour-001',
    slug: 'horseback-riding-arenal-volcano',
    title: 'Horseback Riding Experience',
    price: 55,
    duration: '2.5 hours',
    difficulty: 'Easy',
    description: 'Ride through lush pastures and rainforest trails with healthy, well-cared-for horses. Enjoy local wildlife and beautiful countryside views.',
    highlights: ['Well-Trained Horses', 'Birdwatching', 'Farm Visit', 'Small Groups'],
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2000',
    images: ['https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2000'],
    isResale: false,
    category: 'Relax',
  },
  {
    id: 'tour-004',
    slug: 'arenal-river-tubing-adventure',
    title: 'Arenal River Tubing',
    price: 60,
    duration: '3 hours',
    difficulty: 'Moderate',
    description: 'Bounce down the river in your own tube. A perfect mix of adrenaline and relaxation surrounded by nature on Arenal River.',
    highlights: ['River Tubing', 'Nature Views', 'Refreshing Swim', 'Fun Guides'],
    image: '/images/tours/tubing/tour-photo.jpg',
    images: ['/images/tours/tubing/tour-photo.jpg'],
    isResale: false,
    category: 'Water',
  },

  // ===================================
  // NEW TOURS
  // ===================================
  {
    id: 'tour-canyoning',
    slug: 'canyoning-waterfall-rappelling-arenal',
    title: 'Canyoning Waterfall Rappelling',
    price: 105,
    netPrice: 74,
    duration: '4 hours',
    difficulty: 'Hard',
    description: 'Canyoning adventure with waterfall rappels, canopy, and hiking through the canyon.',
    highlights: [
      '5 rappels (20m, 25m, 30m, 35m and 60m)',
      '2 ziplines (150m and 400m)',
      'Full safety equipment included',
      'Certified expert guides',
      'Transportation from La Fortuna and surrounding areas',
      'Typical Costa Rican lunch (Chicken, beef, vegan, or vegetarian options)'
    ],
    schedule: ['7:00 am', '10:00 am', '1:00 pm'],
    minAge: 5,
    image: '/images/tours/canyoning/canyoning1.webp',
    images: [
      '/images/tours/canyoning/canyoning1.webp',
      '/images/tours/canyoning/canyoning2.webp',
      '/images/tours/canyoning/canyoning3.webp',
      '/images/tours/canyoning/canyoning4.webp'
    ],
    isResale: true,
    category: 'Adrenaline',
  },
  {
    id: 'tour-rafting',
    slug: 'white-water-rafting-balsa-river',
    title: 'White Water Rafting – Río Balsa (Class II / III)',
    price: 78,
    netPrice: 53,
    duration: '5 hours',
    difficulty: 'Moderate',
    description: 'Family-friendly rafting on the Balsa River with moderate rapids, perfect for beginners and families.',
    highlights: [
      '10 km of exciting rapids',
      'Fresh fruit and beverages',
      'Typical Costa Rican lunch',
      'Full safety equipment included',
      'Certified expert guides',
      'Transportation from La Fortuna and surrounding areas',
      'Towel included'
    ],
    schedule: ['10:00 am'],
    minAge: 6,
    image: '/images/tours/rafting/rafting1.webp',
    images: [
      '/images/tours/rafting/rafting1.webp',
      '/images/tours/rafting/rafting2.webp',
      '/images/tours/rafting/rafting3.webp',
      '/images/tours/rafting/rafting4.webp'
    ],
    isResale: true,
    category: 'Water',
  },
  {
    id: 'tour-safari-float',
    slug: 'safari-float-penas-blancas-river',
    title: 'Safari Float – Río Peñas Blancas',
    price: 73,
    priceChildren: 63,
    netPrice: 48,
    netPriceChildren: 40,
    duration: '4 hours',
    difficulty: 'Easy',
    description: 'Peaceful river safari float focused on wildlife observation and nature photography.',
    highlights: [
      'Guided tour by a naturalist expert',
      'Observation of monkeys, sloths, birds, and crocodiles',
      'Transportation from La Fortuna and surrounding areas'
    ],
    schedule: ['7:00 am', '2:00 pm'],
    minAge: 3,
    image: '/images/tours/float/20250209_075018.webp',
    images: [
      '/images/tours/float/20250209_075018.webp',
      '/images/tours/float/20240415_082403.webp',
      '/images/tours/float/20240415_082456.webp',
      '/images/tours/float/DSC_1329.webp',
      '/images/tours/float/IMG_9604.webp',
      '/images/tours/float/_ANF0230.webp',
      '/images/tours/float/_ANF0260.webp'
    ],
    isResale: true,
    category: 'Wildlife',
  },
  {
    id: 'tour-chocolate-roots',
    slug: 'chocolate-tour-roots-experience',
    title: 'Chocolate Tour: Roots Experience',
    price: 40,
    duration: '1.5 hours',
    difficulty: 'Easy',
    description: 'A medicinal and aesthetic journey based on ancestral Costa Rican roots. This sensory experience uses premium organic cacao to nourish your skin and soul.',
    highlights: [
      'Therapeutic Massage',
      'Artisanal Chocolate Wrapper',
      'Moisturizing Cacao Mask',
      'Pressure Point Reflexology',
      'Medicinal & Sensory Experience'
    ],
    image: '/images/tours/chocolate/chocolate1.webp',
    images: [
      '/images/tours/chocolate/chocolate1.webp',
      '/images/tours/chocolate/chocolate2.webp',
      '/images/tours/chocolate/chocolate3.webp',
      '/images/tours/chocolate/chocolate4.webp'
    ],
    isResale: false,
    category: 'Relax',
  },


];
