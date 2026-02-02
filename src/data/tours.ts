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
  isResale: boolean;
  category: 'Hiking' | 'Adrenaline' | 'Water' | 'Wildlife' | 'Relax';
}

export const tours: Tour[] = [
  // LOCAL / PROPIO
  {
    id: '1',
    slug: 'horseback-riding',
    title: 'Horseback Riding Experience',
    price: 55,
    duration: '2.5 hours',
    difficulty: 'Easy',
    description: 'Ride through lush pastures and rainforest trails with our own healthy, well-cared-for horses. Enjoy stunning views of the Arenal Volcano and vibrant local wildlife.',
    highlights: ['Volcano Views', 'Well-Trained Horses', 'Birdwatching', 'Farm Visit'],
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2000',
    isResale: false,
    category: 'Relax'
  },
  {
    id: '2',
    slug: 'childrens-eternal-rainforest',
    title: 'Children\'s Eternal Rainforest Hike',
    price: 45,
    duration: '3 hours',
    difficulty: 'Moderate',
    description: 'Explore "Bosque Eterno de los Niños", Costa Rica\'s largest private reserve. A magical hike through dense cloud forest with immense biodiversity and fewer crowds.',
    highlights: ['Cloud Forest', 'Private Reserve', 'Biodiversity', 'Support Conservation'],
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000',
    isResale: false,
    category: 'Hiking'
  },
  {
    id: '3',
    slug: 'burrito-waterfall',
    title: 'Burrito Waterfall Hike',
    price: 40,
    duration: '2.5 hours',
    difficulty: 'Moderate',
    description: 'A hidden gem adventure. Hike through private trails to reach the spectacular Burrito Waterfall. Perfect for those seeking a refreshing dip away from main tourist spots.',
    highlights: ['Hidden Waterfall', 'Swimming Hole', 'Private Trail', 'Scenic Hike'],
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=2000',
    isResale: false,
    category: 'Hiking'
  },
  {
    id: '4',
    slug: 'night-walk',
    title: 'Rainforest Night Walk',
    price: 45,
    duration: '2 hours',
    difficulty: 'Easy',
    description: 'Detailed exploration of the jungle at night. Spot red-eyed tree frogs, sleeping birds, tarantulas, and active nocturnal mammals in our private reserve.',
    highlights: ['Nocturnal Wildlife', 'Frogs & Snakes', 'Flashlights Provided', 'Expert Guide'],
    image: 'https://images.unsplash.com/photo-1550965380-0a2569c763b0?q=80&w=2000',
    isResale: false,
    category: 'Wildlife'
  },
  {
    id: '5',
    slug: 'cooking-class',
    title: 'Traditional Cooking Class',
    price: 65,
    duration: '3 hours',
    difficulty: 'Easy',
    description: 'Learn to cook authentic Costa Rican dishes "a la leña" (wood fire). Harvest fresh ingredients from the farm and prepare your own lunch or dinner.',
    highlights: ['Farm-to-Table', 'Wood Stove Cooking', 'Delicious Meal', 'Cultural Experience'],
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2000',
    isResale: false,
    category: 'Relax'
  },
  {
    id: '6',
    slug: 'chocolate-tour',
    title: 'Chocolate & Coffee Tour',
    price: 40,
    duration: '2 hours',
    difficulty: 'Easy',
    description: 'Discover the ancient secrets of cacao. Participate in the entire process from roasting to grinding, and taste organic chocolate mixed with local fruits.',
    highlights: ['Chocolate Tasting', 'History of Cacao', 'Coffee Process', 'Sweet Snacks'],
    image: 'https://images.unsplash.com/photo-1621939514649-28b12e81658e?q=80&w=2000',
    isResale: false,
    category: 'Relax'
  },

  // ADVENTURE / PARTNERS
  {
    id: '7',
    slug: 'maquique-canyoning',
    title: 'Maquique Canyoning',
    price: 105,
    duration: '4 hours',
    difficulty: 'Moderate',
    description: 'Rappel down 5 spectacular waterfalls in a lush rainforest canyon. An adrenaline-filled adventure with Maquique Adventure, known for safety and fun.',
    highlights: ['5 Rappels', 'Canyon Trekking', 'Lunch Included', 'Professional Gear'],
    image: 'https://images.unsplash.com/photo-1605540307843-c9902636253f?q=80&w=2000',
    isResale: true,
    category: 'Adrenaline'
  },
  {
    id: '8',
    slug: 'white-water-rafting',
    title: 'White Water Rafting',
    price: 85,
    duration: '6 hours',
    difficulty: 'Moderate',
    description: 'Challenge the rapids of bountiful local rivers (Balsa or Sarapiquí). Full day of excitement, paddling through class II-III or III-IV rapids.',
    highlights: ['World Class Rapids', 'Tropical Fruit Break', 'Lunch Included', 'Experienced Guides'],
    image: 'https://plus.unsplash.com/premium_photo-1664303499312-917c50e4047b?q=80&w=2000',
    isResale: true,
    category: 'Water'
  },
  {
    id: '9',
    slug: 'arenal-tubing',
    title: 'Arenal River Tubing',
    price: 60,
    duration: '3 hours',
    difficulty: 'Moderate',
    description: 'Bounce down the river in your own tube. A perfect mix of adrenaline and relaxation surrounded by nature on the Arenal River.',
    highlights: ['River Tubing', 'Nature Views', 'Refreshing Swim', 'Fun Guides'],
    image: 'https://images.unsplash.com/photo-1544473244-f6895e672d1a?q=80&w=2000',
    isResale: true,
    category: 'Water'
  },
  {
    id: '10',
    slug: 'safari-float-maquique',
    title: 'Maquique Safari Float',
    price: 60,
    duration: '3.5 hours',
    difficulty: 'Easy',
    description: 'Quietly float down the river to spot monkeys, sloths, and tropical birds. A peaceful wildlife experience operated by Maquique Adventure.',
    highlights: ['Wildlife Watching', 'Peaceful Float', 'Snack Included', 'Great for Seniors'],
    image: 'https://images.unsplash.com/photo-1596423736737-25e227094967?q=80&w=2000',
    isResale: true,
    category: 'Water'
  },
  {
    id: '11',
    slug: 'penas-blancas-safari',
    title: 'Peñas Blancas Safari Float',
    price: 55,
    duration: '4 hours',
    difficulty: 'Easy',
    description: 'The classic wildlife safari on the Peñas Blancas River. Look for crocodiles, iguanas, and families of monkeys in the riverside trees.',
    highlights: ['River Safari', 'Crocodiles & Iguanas', 'Typical Snack', 'Relaxing Paced'],
    image: 'https://images.unsplash.com/photo-1582234080922-fe4725c17921?q=80&w=2000',
    isResale: true,
    category: 'Wildlife'
  }
];
