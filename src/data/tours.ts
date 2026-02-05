export interface Tour {
  id: string;
  slug: string;
  title: string;
  price: number;
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
    slug: 'horseback-riding',
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
    id: 'tour-002',
    slug: 'night-walk',
    title: 'Night Walk (Exclusive Tour)',
    price: 67,
    duration: '2 hours',
    difficulty: 'Easy',
    description: 'Explore rainforest at night and spot frogs, sleeping birds, insects, and other nocturnal wildlife with an expert guide.',
    highlights: ['Nocturnal Wildlife', 'Expert Guide', 'Flashlights Provided', 'Great Photos'],
    image: 'https://images.unsplash.com/photo-1550965380-0a2569c763b0?q=80&w=2000',
    images: ['https://images.unsplash.com/photo-1550965380-0a2569c763b0?q=80&w=2000'],
    isResale: false,
    category: 'Wildlife',
  },
  {
    id: 'tour-003',
    slug: 'cooking-class',
    title: 'Traditional Cooking Class',
    price: 65,
    duration: '3 hours',
    difficulty: 'Easy',
    description: 'Learn to cook authentic Costa Rican dishes \"a la leña\" (wood fire). Harvest fresh ingredients from farm and prepare your own lunch or dinner.',
    highlights: ['Farm-to-Table', 'Wood Stove Cooking', 'Delicious Meal', 'Cultural Experience'],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2000',
    images: ['https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2000'],
    isResale: false,
    category: 'Relax',
  },
  {
    id: 'tour-004',
    slug: 'arenal-tubing',
    title: 'Arenal River Tubing',
    price: 60,
    duration: '3 hours',
    difficulty: 'Moderate',
    description: 'Bounce down the river in your own tube. A perfect mix of adrenaline and relaxation surrounded by nature on Arenal River.',
    highlights: ['River Tubing', 'Nature Views', 'Refreshing Swim', 'Fun Guides'],
    image: '/images/tubing/tour-photo.jpg',
    images: ['/images/tubing/tour-photo.jpg'],
    isResale: true,
    category: 'Water',
  },

  // ==========================================================
  // JACAMAR TOURS (Reventa) - EXACT MATCH FROM jacamartours.com
  // ==========================================================
  // TOP 8 JACAMAR TOURS (MANUAL CURATION)
  {
    id: 'jacamar-exact-1',
    slug: 'arenal-hanging-bridges-fortuna-waterfall',
    title: 'Hanging Bridges + Fortuna Waterfall',
    price: 85,
    duration: '5 hours',
    difficulty: 'Moderate',
    category: 'Hiking',
    description: 'Take a nature walk on the trails that will guide you to some of the most beautiful hanging bridges, they have 15 bridges in total and you can walk through them at 180 meters high.',
    shortDescription: 'Take a nature walk on the trails with hanging bridges at 180m high.',
    highlights: ['15 Hanging Bridges in total', '180 meters high', 'Nature trails', 'Wildlife viewing', 'Spectacular waterfall', 'Educational experience'],
    image: 'https://imgcdn.bokun.tools/694d8fb3-3750-4afc-a16d-5d088b92ffe9.jpeg?fm=auto&mode=crop&crop=center&dpr=1&w=387&h=271',
    images: [
      'https://imgcdn.bokun.tools/c102a6e54877e67fa394d259cf27b29b.jpeg?fm=auto&mode=crop&crop=center&dpr=1&w=387&h=271',
      'https://imgcdn.bokun.tools/a8302c93-1c17-46b4-b3c697e525d25.jpg?fm=auto&mode=crop&crop=center&dpr=1&w=387&h=271',
    ],
    included: ['Hanging Bridges entrance', 'Fortuna Waterfall access', 'Naturalist guide', 'Transportation', 'Safety equipment', 'Snacks and water'],
    whatToBring: ['Comfortable walking shoes', 'Lightweight clothing', 'Rain jacket', 'Camera', 'Insect repellent', 'Water bottle'],
    isResale: true,
    category: 'Hiking',
  },
  {
    id: 'jacamar-exact-2',
    slug: 'white-water-rafting-class-iv',
    title: 'White Water Rafting (Class II & III)',
    price: 82,
    duration: '5 hours',
    difficulty: 'Moderate',
    category: 'Adrenaline',
    description: 'Take on our turbulent waters in one of the most exciting river rafting tour in Costa Rica. A journey that you and your team will never forget.',
    shortDescription: 'Thrilling river rafting adventure on Costa Rica.',
    highlights: ['Class II & III rapids', 'Safety equipment', 'Professional guides', 'River scenery', 'Adrenaline rush', 'Photography opportunities'],
    image: 'https://imgcdn.bokun.tools/e75ced95-7cfd-4bdf-acfe-c97be1faa9bf.jpeg',
    images: [
      'https://imgcdn.bokun.tools/b5781425-44ae-4428-8b7c3d65d53f63.jpg',
      'https://imgcdn.bokun.tools/698a9c79-6a71-4432-a950e11e6a6f.jpg'
    ],
    included: ['Rafting equipment', 'Life jacket and helmet', 'Safety briefing', 'Professional guide', 'Lunch included', 'Transportation'],
    whatToBring: ['Swimsuit', 'Quick-dry clothes', 'Waterproof shoes', 'Sunscreen', 'Change of clothes', 'Camera', 'Adventurous spirit'],
    isResale: true,
    category: 'Adrenaline',
  },
  {
    id: 'jacamar-exact-3',
    slug: 'arenal-volcano-hike',
    title: 'Arenal Volcano Hike',
    price: 68,
    duration: '4 hours',
    difficulty: 'Moderate',
    category: 'Hiking',
    description: 'A guided hike on the slopes of the majestic Arenal Volcano with our expert naturalist guides. Learn about volcanic activity and observe diverse wildlife.',
    shortDescription: 'Guided hike on Arenal Volcano with expert naturalist guides.',
    highlights: ['Volcano trails', 'Educational experience', 'Wildlife viewing', 'Scenic viewpoints', 'Geological features', 'Naturalist guide'],
    image: 'https://imgcdn.bokun.tools/f91326e0-21cb-41aa-973f-d92a6880ef9.jpeg',
    images: [
      'https://imgcdn.bokun.tools/7e9041f6-8c3f-4bde-842a29785f9.jpg',
      'https://imgcdn.bokun.tools/e684a8f4-8f2f-472f-a8064377a742.jpg',
      'https://imgcdn.bokun.tools/1553284965-83fd3e82fa5a.jpeg'
    ],
    included: ['Naturalist guide', 'Park entrance', 'Educational content', 'Safety equipment', 'Transportation', 'Snacks included'],
    whatToBring: ['Hiking boots', 'Lightweight clothing', 'Water', 'Camera', 'Sunscreen'],
    isResale: true,
    category: 'Hiking',
  }
];