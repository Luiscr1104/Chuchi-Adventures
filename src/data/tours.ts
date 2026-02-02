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
  // HIKING TOURS (Jacamar Inspired)
  {
    id: '1',
    slug: 'arenal-volcano-hike-1968',
    title: 'Arenal Volcano 1968 Trail Hike',
    price: 65,
    duration: '3 hours',
    difficulty: 'Moderate',
    description: 'Hike through the lava trails of the historic 1968 eruption. Enjoy unparalleled panoramic views of the Arenal Volcano and Lake Arenal while exploring the regenerating forest.',
    highlights: ['Volcano & Lake Views', '1968 Lava Trails', 'Naturalist Guide', 'A/C Transport'],
    image: 'https://images.unsplash.com/photo-1542111108264-58e38f6d6343?q=80&w=2000',
    isResale: true,
    category: 'Hiking'
  },
  {
    id: '2',
    slug: 'rio-celeste-hike',
    title: 'Rio Celeste National Park Hike',
    price: 95,
    duration: '7 hours',
    difficulty: 'Moderate',
    description: 'A magical hike through the rainforest to discover the intense turquoise river. Visit the waterfall, the "teñideros" (dyed waters), and the boiling mud pots.',
    highlights: ['Rio Celeste Waterfall', 'Teñideros', 'Rainforest', 'Lunch Included'],
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2000',
    isResale: true,
    category: 'Hiking'
  },
  {
    id: '3',
    slug: 'mistico-hanging-bridges',
    title: 'Mistico Hanging Bridges Walk',
    price: 70,
    duration: '3.5 hours',
    difficulty: 'Easy',
    description: 'Explore the rainforest canopy walking across a series of suspension bridges. The best perspective for birdwatching, spotting monkeys, and enjoying lush flora.',
    highlights: ['Hanging Bridges', 'Birdwatching', 'Panoramic Views', 'Certified Guide'],
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2000',
    isResale: true,
    category: 'Hiking'
  },
  {
    id: '4',
    slug: 'el-silencio-nature-hike',
    title: 'El Silencio Reserve Nature Hike',
    price: 55,
    duration: '3 hours',
    difficulty: 'Easy',
    description: 'A private reserve ideal for spotting wildlife without the crowds. Flat trails, giant Ceiba trees, and a high probability of seeing toucans and monkeys.',
    highlights: ['Private Reserve', 'Ancient Trees', 'Abundant Wildlife', 'Relaxed Walk'],
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000',
    isResale: true,
    category: 'Hiking'
  },

  // ADRENALINE & WATER
  {
    id: '5',
    slug: 'penas-blancas-safari',
    title: 'Peñas Blancas Safari Float',
    price: 55,
    duration: '4 hours',
    difficulty: 'Easy',
    description: 'Drift silently down the Peñas Blancas River on a raft. Ideal for families. Spot crocodiles, iguanas, monkeys, and sloths from the water.',
    highlights: ['Safari Float', 'Wildlife Spotting', 'Typical Snack', 'No Rapids'],
    image: 'https://images.unsplash.com/photo-1596423736737-25e227094967?q=80&w=2000',
    isResale: false,
    category: 'Water'
  },
  {
    id: '6',
    slug: 'la-fortuna-waterfall',
    title: 'La Fortuna Waterfall Hike',
    price: 75,
    duration: '4 hours',
    difficulty: 'Moderate',
    description: 'Descend 500 steps to the base of this impressive 70-meter waterfall. Cool off with a swim in its crystal-clear waters.',
    highlights: ['70m Waterfall', 'River Swim', 'Orchid Garden', 'Local Guide'],
    image: 'https://images.unsplash.com/photo-1466057036683-1ae78bc4049b?q=80&w=2000',
    isResale: true,
    category: 'Hiking'
  },
  {
    id: '7',
    slug: 'canyoning-pure-trek',
    title: 'Pure Trek Canyoning',
    price: 115,
    duration: '4 hours',
    difficulty: 'Moderate',
    description: 'Rappel down waterfalls in a safe and thrilling environment. The best canyoning adventure in Costa Rica.',
    highlights: ['4 Waterfall Rappels', 'Rock Wall Climb', 'Delicious Lunch', 'Extreme Adventure'],
    image: 'https://images.unsplash.com/photo-1605540307843-c9902636253f?q=80&w=2000',
    isResale: true,
    category: 'Adrenaline'
  },
  {
    id: '8',
    slug: 'sloth-observation-tour',
    title: 'Sloth Observation Tour',
    price: 50,
    duration: '2.5 hours',
    difficulty: 'Easy',
    description: 'Guaranteed sloth sightings in their natural habitat. A gentle walk with telescopes to observe these curious animals.',
    highlights: ['Sloth Guarantee', 'Telescope Use', 'Expert Guide', 'Great for Kids'],
    image: 'https://images.unsplash.com/photo-1589714881514-498c4714ee28?q=80&w=2000',
    isResale: true,
    category: 'Wildlife'
  },
  {
    id: '9',
    slug: 'night-walk-experience',
    title: 'Rainforest Night Walk',
    price: 45,
    duration: '2.5 hours',
    difficulty: 'Easy',
    description: 'The jungle comes alive at night. Discover red-eyed tree frogs, fascinating insects, and nocturnal mammals in this sensory adventure.',
    highlights: ['Frogs & Reptiles', 'Flashlights Included', 'Private Reserve', 'Night Guide'],
    image: 'https://images.unsplash.com/photo-1550965380-0a2569c763b0?q=80&w=2000',
    isResale: false,
    category: 'Wildlife'
  },
  {
    id: '10',
    slug: 'rafting-balsa',
    title: 'White Water Rafting Rio Balsa',
    price: 85,
    duration: '6 hours',
    difficulty: 'Moderate',
    description: 'Pure adrenaline on Class II & III rapids. Perfect for adventurous beginners and families looking for excitement.',
    highlights: ['Class II-III Rapids', 'Casado Lunch', 'Tropical Fruits', 'Safety Guaranteed'],
    image: 'https://plus.unsplash.com/premium_photo-1664303499312-917c50e4047b?q=80&w=2000',
    isResale: true,
    category: 'Water'
  }
];
