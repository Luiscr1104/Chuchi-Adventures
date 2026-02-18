export type Difficulty = 'Easy' | 'Moderate' | 'Hard';

export type Category =
  | 'Hiking'
  | 'Adrenaline'
  | 'Water'
  | 'Wildlife'
  | 'Relax'
  | 'Combo'
  | 'HotSprings';

export type PassengerType = 'adult' | 'child';

export interface AgeRange {
  from: number; // inclusive
  to: number;   // inclusive
}

export interface ChildPolicy {
  /** Edad mínima general para participar (si aplica) */
  minAge?: number;

  /** Rango gratis (si aplica) */
  freeAges?: AgeRange;

  /** Rango con descuento y su % (si aplica) */
  discountedAges?: AgeRange;
  discountPercent?: number;

  /** Si el tour NO aplica descuento niño */
  discountsApply?: boolean;
}

export interface TimeSlot {
  start: string; // "07:50"
  end?: string;  // "12:30" (opcional si solo querés mostrar salida)
}

export interface Price {
  /** Precio público (rack) */
  rack: number;

  /** Precio niño (rack) si existe */
  rackChild?: number;
}

export interface Variant {
  id: string;         // "standard", "no-transport", "baldi", "paradise", "ecotermales", "private", etc.
  label: string;      // lo que se muestra al usuario
  price: Price;

  /** Flags para filtros o badges */
  includesTransport: boolean;
  includesLunch?: boolean;
  includesEntranceFees?: boolean;
  includesHotSprings?: boolean;
  hotSpringsProvider?: 'Baldi' | 'Paradise' | 'Ecotermales';
  private?: boolean;

  /** Horarios pueden cambiar por variante */
  schedule?: TimeSlot[];

  /** Notas por variante (ej. “solo si opción 1 está abierto”) */
  notes?: string[];
}

export interface Tour {
  id: string;
  slug: string;
  title: string;

  /** Texto para cards */
  shortDescription?: string;

  /** Descripción larga (inglés) */
  description: string;

  duration?: string;         // "4 hours" o "Full day"
  difficulty: Difficulty;
  category: Category;

  /** Para UI */
  highlights: string[];
  image: string;
  images?: string[];
  logo?: string;

  /** Si es tuyo o revendido */
  isResale: boolean;

  /** Políticas de niños (base) */
  childPolicy?: ChildPolicy;

  /** Horarios base (si aplica para todas las variantes) */
  schedule?: TimeSlot[];

  /** Variantes del tour (precios + condiciones) */
  variants: Variant[];

  /** Incluidos generales del tour (base) */
  includes?: string[];

  /** “Qué llevar” si querés mostrarlo */
  whatToBring?: string[];

  /** TripAdvisor ratings */
  rating?: number;
  reviewsCount?: number;
}

export const tours: Tour[] = [
  // =========================
  // ⭐ TOP FEATURED TOURS
  // =========================
  {
    id: 'combo-top-001',
    slug: 'arenal-top-4-attractions-incl-hot-springs',
    title: 'Best Arenal Volcano Tour: Waterfall, Bridges & Hot Springs',
    shortDescription: 'The #1 Best-Selling Combo in La Fortuna. Experience the "Big 4" highlights in one flawless day.',
    description: 'Stop worrying about logistics and start living the adventure. This is the <strong>Ultimate Arenal Experience</strong>—the only tour that combines the <strong>top 4 adventures</strong> in La Fortuna into one seamless, all-inclusive day.<br /><br /><strong>Why this is our #1 Best-Seller:</strong><br />You will walk the mystical <strong>Hanging Bridges</strong>, swim in the pristine <strong>La Fortuna Waterfall</strong>, hike the ancient lava flows of <strong>Arenal Volcano</strong>, and finish with a relaxing soak in <strong>Hot Springs with a gourmet dinner</strong>.<br /><br />We handle everything: luxury transport, entrance fees, naturalist guides, lunch, and dinner. You just bring the sense of wonder.',
    duration: '10 hours',
    difficulty: 'Hard',
    category: 'Combo',
    highlights: ['Hanging Bridges', 'Waterfall Swim', 'Volcano Hike', 'Hot Springs & Dinner'],
    image: 'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/aec31631-8983-49a5-8914-bf643e24c200/public',
    images: [
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/5edab093-9ba5-4182-28d9-68bc99e53d00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/444f653e-489e-4684-3379-25b25fb30400/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/d94aff5d-cdbd-4aff-d628-5891f2c17700/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/b15e2a91-50e9-4ea8-25c8-56ec6416e400/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/32e91e75-d8ce-475c-e0b2-c96b197ae900/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/6c230c13-6da0-4511-1a9d-c9d89785ac00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/95661570-3574-4aa6-6285-69b60fc88300/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/3394674a-b407-4c62-7871-52e9eaca6400/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/d3446754-91a7-4c3b-a001-e041fe28b300/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/ee6be305-fb64-4109-230e-553fd64a2800/public'
    ],
    isResale: true,
    childPolicy: {
      minAge: 5
    },
    variants: [
      { id: 'standard', label: 'Standard (No Transport)', price: { rack: 242 }, includesTransport: false, includesLunch: true, includesHotSprings: true }
    ],
    rating: 5,
    reviewsCount: 148
  },
  {
    id: 'river-003',
    slug: 'white-water-rafting-sarapiqui',
    title: 'Best White Water Rafting Sarapiquí: Class II-III Family Adventure',
    shortDescription: 'The perfect mix of adrenaline and safety. Ideal for families and first-timers wanting real jungle adventure.',
    description: 'Navigate the thrilling yet safe rapids of the <strong>Sarapiquí River</strong> ("The Jungle Run"). Perfect for families and beginners who want a taste of <strong>real whitewater action</strong> without the extreme danger.<br /><br />Between rapids, you’ll float through calm pools to spot unsuspecting wildlife on the riverbanks. Certified guides, top-tier equipment, and pure tropical fun.',
    duration: '5 hours',
    difficulty: 'Moderate',
    category: 'Water',
    highlights: ['Class II-III Rapids', 'Tropical Scenery', 'Expert Guides'],
    image: 'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/ae599075-4079-44cf-3a21-898f605b7700/public',
    images: [
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/7083f061-3934-4ce2-77d3-94c011654500/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/1fdc92ec-4708-4073-89e4-9df00ae5ba00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/24adcae3-3104-4bd7-be4f-1ccd04704e00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/31559580-4e5a-4e9f-8233-05c556fa2900/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/5e153782-217e-4273-4dfb-096ce115e800/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/90d3135c-c9b9-4df6-fb31-df1b1c028300/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/e81971df-e68a-4621-950a-1ea3cdd48000/public'
    ],
    isResale: true,
    variants: [
      { id: 'standard', label: 'Standard (with transport)', price: { rack: 105 }, includesTransport: true, includesLunch: true },
      { id: 'baldi', label: 'With Baldi Hot Springs', price: { rack: 155 }, includesTransport: true, includesLunch: true, includesHotSprings: true, hotSpringsProvider: 'Baldi' }
    ],
    rating: 5,
    reviewsCount: 104
  },
  {
    id: 'hiking-003',
    slug: 'hanging-bridges-tour',
    title: 'Mystic Hanging Bridges: Exclusive Rainforest Canopy Walk',
    shortDescription: 'Walk among the clouds. A guided journey through the secret layers of the rainforest ceiling.',
    description: 'Discover the secrets of the rainforest that can only be seen from above. On this <strong>Exclusive Canopy Walk</strong>, you will traverse a network of suspended bridges that put you eye-to-eye with monkeys, toucans, and the vibrant life of the forest roof.<br /><br />This isn’t just a walk; it’s a masterclass in nature with an expert naturalist who knows exactly where the wildlife hides.',
    duration: '4 hours',
    difficulty: 'Moderate',
    category: 'Hiking',
    highlights: ['Forest Canopy', 'Wildlife from Above', 'Scenic Views'],
    image: 'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/c0cd7b4b-e3d7-4e02-d925-3584578ecc00/public',
    images: [
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/444f653e-489e-4684-3379-25b25fb30400/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/d94aff5d-cdbd-4aff-d628-5891f2c17700/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/b15e2a91-50e9-4ea8-25c8-56ec6416e400/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/32e91e75-d8ce-475c-e0b2-c96b197ae900/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/6c230c13-6da0-4511-1a9d-c9d89785ac00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/95661570-3574-4aa6-6285-69b60fc88300/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/3394674a-b407-4c62-7871-52e9eaca6400/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/d3446754-91a7-4c3b-a001-e041fe28b300/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/ee6be305-fb64-4109-230e-553fd64a2800/public'
    ],
    isResale: true,
    variants: [
      { id: 'standard', label: 'Standard', price: { rack: 85 }, includesTransport: true },
      { id: 'hot-springs', label: 'With Hot Springs', price: { rack: 135 }, includesTransport: true, includesHotSprings: true }
    ],
    rating: 4.5,
    reviewsCount: 212
  },
  // =========================
  // 🌊 RIVER & WATER TOURS
  // =========================
  {
    id: 'river-001',
    slug: 'safari-float-penas-blancas-raft',
    title: 'Best Wildlife Safari Float La Fortuna: Spot Monkeys & Sloths',
    shortDescription: '100% relaxation, 100% wildlife. Sit back while we row you through the jungle.',
    description: '<strong>Put your camera in one hand and a drink in the other.</strong> This is the ultimate "lazy river" experience for nature lovers. Our expert guides do all the paddling while you focus on spotting <strong>monkeys, sloths, caimans, and river turtles</strong> offering a unique perspective of the Peñas Blancas River.',
    duration: '4 hours',
    difficulty: 'Easy',
    category: 'Wildlife',
    highlights: ['Naturalist Guide', 'Wildlife Spotting', 'Family Friendly'],
    image: 'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/467761f8-ba2a-4099-6713-395a1a537100/public',
    images: [
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/09c8eba2-6fb6-48a4-4aac-7a976bb6c000/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/a904a362-61b1-482a-3436-7ff650f0d600/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/b22d405f-59a1-4a65-e796-e1c0f6dd0f00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/c41b7cf3-5bf4-40d2-517d-733f58237300/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/e6b94daa-7b4c-408f-80f0-8be90445db00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/3c4b0bb2-7eea-4c06-de82-9bea97e49900/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/ce347f63-42bd-4b79-e347-9fd44aa3f000/public'
    ],
    isResale: true,
    variants: [
      { id: 'standard', label: 'Standard Raft', price: { rack: 83 }, includesTransport: true },
      { id: 'hot-springs', label: 'With Hot Springs', price: { rack: 125 }, includesTransport: true, includesHotSprings: true }
    ],
    rating: 5,
    reviewsCount: 138
  },
  {
    id: 'river-002',
    slug: 'safari-float-penas-blancas-kayak',
    title: 'Safari Float – Peñas Blancas River (Kayak)',
    shortDescription: 'Active safari float experience paddling your own kayak.',
    description: 'An active safari float experience paddling your own kayak while observing wildlife along the river.',
    duration: '4 hours',
    difficulty: 'Moderate',
    category: 'Water',
    highlights: ['Paddling Experience', 'River Wildlife', 'Nature Connection'],
    image: 'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/12d6f914-6be6-4bcf-c5cd-7e6260c2b500/public',
    images: [
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/bb0296d3-cb96-4fe3-12de-942258978e00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/43371d85-e38a-499d-4fde-a196d0ff8800/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/be8f2550-b705-40a1-aeaf-a27e91334700/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/242ed38d-d7bb-4fd3-37bc-b90a336a9c00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/4ff344ce-58d1-40e0-091e-5a0d3c840200/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/1fddb5f5-adbb-4003-8177-667d76991a00/public'
    ],
    isResale: true,
    variants: [
      { id: 'standard', label: 'Standard Kayak', price: { rack: 88 }, includesTransport: true },
      { id: 'hot-springs', label: 'With Hot Springs', price: { rack: 130 }, includesTransport: true, includesHotSprings: true }
    ],
    rating: 4.5,
    reviewsCount: 96
  },
  {
    id: 'river-004',
    slug: 'arenal-lake-kayak',
    title: 'Arenal Lake by Kayak',
    shortDescription: 'Kayak across the majestic Arenal Lake.',
    description: 'Kayak across the majestic Arenal Lake surrounded by stunning landscapes and volcano views.',
    duration: '3 hours',
    difficulty: 'Moderate',
    category: 'Water',
    highlights: ['Volcano Views', 'Arenal Lake', 'Active Adventure'],
    image: 'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/f8eb2267-5b65-43eb-ee8e-c2d862c8bb00/public',
    images: [
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/4b6cfa59-4db3-4fac-f4a7-4674dd1d0900/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/98caf730-7d00-415f-4bd2-0e46bd041a00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/bdffdc74-aeee-4fcf-095e-9df249498900/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/2a73bdb1-f993-4942-0811-1b40e1897b00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/e056cc09-590e-4b29-21c1-6216576cdc00/public'
    ],
    isResale: true,
    variants: [
      { id: 'morning', label: 'Morning Departure', price: { rack: 81 }, includesTransport: true },
      { id: 'afternoon', label: 'Afternoon Departure', price: { rack: 81 }, includesTransport: true }
    ],
    rating: 4.5,
    reviewsCount: 64
  },
  {
    id: 'river-005',
    slug: 'pontoon-boat-rental-arenal-lake',
    title: 'Pontoon Boat Rental – Arenal Lake',
    shortDescription: 'Private pontoon boat rental for groups.',
    description: 'Private pontoon boat rental with captain for groups, perfect for relaxation and sightseeing.',
    duration: '2-4 hours',
    difficulty: 'Easy',
    category: 'Relax',
    highlights: ['Private Boat', 'Captain Included', 'Scenic Views'],
    image: '/images/tours/float/_ANF0260.webp',
    isResale: true,
    variants: [
      { id: 'standard', label: 'Private Boat (per boat)', price: { rack: 248 }, includesTransport: false }
    ],
    rating: 5,
    reviewsCount: 28
  },

  // =========================
  // 🌿 NATURE & HIKING TOURS
  // =========================
  {
    id: 'hiking-001',
    slug: 'arenal-volcano-trails-el-silencio',
    title: 'Arenal Volcano Trails – El Silencio',
    shortDescription: 'Guided hike through primary rainforest and lava flows.',
    description: 'Guided hike through primary rainforest and ancient lava flows at the base of Arenal Volcano.',
    duration: '3.5 hours',
    difficulty: 'Moderate',
    category: 'Hiking',
    highlights: ['Lava Flows', 'Volcano Base', 'Rainforest Trails'],
    image: 'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/84ff9676-5311-49c2-2c1f-00d732a3d900/public',
    images: [
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/1e03414d-fdb3-440a-9833-c1b0ef174300/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/65509e11-b7f0-4262-0ebd-64070e698000/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/a89fbf42-b280-4081-65ec-00691a78cd00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/7c159fcf-9148-4849-18bd-96a4ed891000/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/39729a90-8169-4ad4-37ba-c8664d92b100/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/e254ba19-86b7-43a4-2a68-f7d590675a00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/876ff673-0e87-4f7b-2dc3-374592ab7d00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/f586dacd-575f-4ce6-8b4e-f04197e4ab00/public'
    ],
    isResale: true,
    variants: [
      { id: 'standard', label: 'Standard Hike', price: { rack: 77 }, includesTransport: true },
      { id: 'baldi', label: 'With Baldi Hot Springs', price: { rack: 120 }, includesTransport: true, includesHotSprings: true, hotSpringsProvider: 'Baldi' },
      { id: 'ecotermales', label: 'With Ecotermales', price: { rack: 140 }, includesTransport: true, includesHotSprings: true, hotSpringsProvider: 'Ecotermales' }
    ],
    rating: 5,
    reviewsCount: 156
  },
  {
    id: 'hiking-002',
    slug: 'arenal-volcano-national-park-hike',
    title: 'Arenal Volcano National Park Hike',
    shortDescription: 'Explore the Arenal Volcano National Park trails.',
    description: 'Explore the Arenal Volcano National Park trails while learning about volcanic history and biodiversity.',
    duration: '4 hours',
    difficulty: 'Moderate',
    category: 'Hiking',
    highlights: ['National Park', 'History & Bio', 'Lava Rock'],
    image: '/images/tours/tubing/tour-photo.jpg',
    isResale: true,
    variants: [
      { id: 'standard', label: 'Standard', price: { rack: 102 }, includesTransport: true }
    ],
    rating: 5,
    reviewsCount: 89
  },
  {
    id: 'hiking-004',
    slug: 'rio-celeste-hiking-tenorio',
    title: 'Rio Celeste Waterfall Hike from La Fortuna: The Magical Blue River',
    shortDescription: 'Witness the magic of nature. Hike to the famous blue river and waterfall in Tenorio Volcano National Park.',
    description: '<strong>See it to believe it.</strong> A chemical reaction between volcanic minerals creates an optical phenomenon that turns this river an intense, surreal shade of blue.<br /><br />On this hike through the <strong>Tenorio Volcano National Park</strong>, you’ll visit the iconic <strong>Waterfall</strong>, the "Teñideros" (where the river changes color), and the bubbling thermal pots. It’s a bit of a workout, but the photos are worth every step.',
    duration: 'Full day',
    difficulty: 'Hard',
    category: 'Hiking',
    highlights: ['Blue River', 'Tenorio Waterfall', 'Volcanic Area'],
    image: 'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/83e030dc-8726-4b6c-2514-e82034a9d700/public',
    images: [
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/de9a2476-8f7a-4c9a-9c9b-8c504db61200/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/35803fd1-3d18-4087-6eef-4ed08ec1e900/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/0a4208c1-97ba-496d-eef9-f25012402f00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/cfcee852-415a-463a-6ac5-8174acfc5e00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/95b25dad-bc51-4a4b-61bf-910439b4f100/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/700587a8-9607-4e33-41fb-6ebdfbab4c00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/59d4fc81-bcf1-4dc3-a811-c41ab9b50700/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/3aedfe77-467a-4567-424b-20168a849500/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/83e030dc-8726-4b6c-2514-e82034a9d700/public'
    ],
    isResale: true,
    variants: [
      { id: 'standard', label: 'Standard', price: { rack: 140 }, includesTransport: true, includesLunch: true },
      { id: 'baldi', label: 'With Baldi Hot Springs', price: { rack: 195 }, includesTransport: true, includesLunch: true, includesHotSprings: true, hotSpringsProvider: 'Baldi' }
    ],
    rating: 5,
    reviewsCount: 342
  },
  {
    id: 'hiking-005',
    slug: 'jungle-trekking-culture-experience',
    title: 'Jungle Trekking & Culture Experience',
    shortDescription: 'Deep jungle hike combined with culture.',
    description: 'A deep jungle hike combined with Costa Rican cultural experiences and a traditional lunch.',
    duration: '5 hours',
    difficulty: 'Hard',
    category: 'Hiking',
    highlights: ['Ancestral Culture', 'Primary Forest', 'Traditional Food'],
    image: '/images/tours/chocolate/chocolate3.webp',
    isResale: true,
    variants: [
      { id: 'standard', label: 'Min 4 participants', price: { rack: 110 }, includesTransport: true, includesLunch: true }
    ],
    rating: 5,
    reviewsCount: 45
  },
  {
    id: 'hiking-006',
    slug: 'sloth-tour-la-fortuna',
    title: 'Sloth Tour',
    shortDescription: 'Guided walk focused on spotting sloths.',
    description: 'An easy guided walk focused on spotting sloths and learning about their behavior and habitat.',
    duration: '2.5 hours',
    difficulty: 'Easy',
    category: 'Wildlife',
    highlights: ['Sloth Spotting', 'Naturalist Guide', 'Easy Walk'],
    image: 'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/d888445d-8e10-4c98-e8b3-ef14be9c8e00/public',
    images: [
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/e03f3383-c845-4b07-233d-acdcc184ca00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/931b09c9-7254-49c0-87dd-b5705ee4b800/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/a4ca736d-1a8a-4107-0ed5-06f590416000/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/73722799-6517-41d8-36f8-ee9963201400/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/fa0e34ca-5fbe-401f-5a4b-fec88ef1a100/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/b05ce929-e487-464a-3f30-556b19a09c00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/cfc70b3e-c2f9-48b8-47e1-660cb2932500/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/c1445e19-389d-4225-c1bb-14946c197800/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/97d06009-414c-4cc9-fa53-1e2c3ea40b00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/a48ef8a2-9b0b-48e9-3f3c-a58e8d85d400/public'
    ],
    isResale: true,
    variants: [
      { id: 'standard', label: 'Standard', price: { rack: 79 }, includesTransport: true }
    ],
    rating: 5,
    reviewsCount: 167
  },
  {
    id: 'hiking-007',
    slug: 'night-walk-tour-la-fortuna',
    title: 'Night Walk Tour',
    shortDescription: 'Guided nocturnal walk to observe nighttime wildlife.',
    description: 'Guided nocturnal walk to observe frogs, insects, reptiles and other nighttime wildlife.',
    duration: '2.5 hours',
    difficulty: 'Moderate',
    category: 'Wildlife',
    highlights: ['Nocturnal Wildlife', 'Frog Spotting', 'Jungle after dark'],
    image: '/images/tours/float/IMG_9604.webp',
    isResale: true,
    variants: [
      { id: 'standard', label: 'Standard', price: { rack: 79 }, includesTransport: true }
    ],
    rating: 5,
    reviewsCount: 92
  },

  // =========================
  // 🦜 WILDLIFE & WETLANDS
  // =========================
  {
    id: 'wild-001',
    slug: 'unique-cano-negro-wildlife-refuge',
    title: 'Unique Caño Negro Wildlife Refuge',
    shortDescription: 'Boat safari through Caño Negro Wetlands.',
    description: 'Boat safari through Caño Negro Wetlands, one of Costa Rica’s most important wildlife refuges.',
    duration: 'Full day',
    difficulty: 'Easy',
    category: 'Wildlife',
    highlights: ['Wetlands Boat Tour', 'Rich Biodiversity', 'Nature Photography'],
    image: '/images/tours/caño-negro/cañoNegro1.webp',
    images: [
      '/images/tours/caño-negro/cañoNegro1.webp',
      '/images/tours/caño-negro/cañoNegro2.webp',
      '/images/tours/caño-negro/cañoNegro3.webp',
      '/images/tours/caño-negro/cañoNegro4.webp',
      '/images/tours/caño-negro/cañoNegro5.webp'
    ],
    isResale: true,
    variants: [
      { id: 'standard', label: 'With Transport', price: { rack: 96 }, includesTransport: true, includesLunch: true },
      { id: 'no-transport', label: 'Without Transport', price: { rack: 70 }, includesTransport: false, includesLunch: true },
      { id: 'hot-springs', label: 'With Hot Springs', price: { rack: 192 }, includesTransport: true, includesLunch: true, includesHotSprings: true }
    ],
    rating: 5,
    reviewsCount: 124
  },

  // =========================
  // 🔥 ADVENTURE TOURS
  // =========================
  {
    id: 'adv-001',
    slug: 'canyoning-waterfall-rappelling-arenal',
    title: 'Extreme Canyoning: 5 Waterfalls & Jungle Trekking (Adrenaline Junkies)',
    shortDescription: 'Not for the faint of heart. Rappel down thundering waterfalls in the deep jungle.',
    description: '<strong>Gravity is optional.</strong> This is the most heart-pounding tour in Arenal. You won’t just look at waterfalls—you’ll rappel down the face of them.<br /><br />Conquer <strong>5 different waterfalls</strong>, cliff jumps, and the famous "Monkey Drop". If you want to feel alive, this is the tour for you.',
    duration: '4 hours',
    difficulty: 'Hard',
    category: 'Adrenaline',
    highlights: ['Waterfall Rappel', 'Ziplines', 'Canyon Hike'],
    image: '/images/tours/canyoning/canyoning1.webp',
    isResale: true,
    variants: [
      { id: 'standard', label: 'Standard (with transport)', price: { rack: 105 }, includesTransport: true, includesLunch: true }
    ],
    rating: 5,
    reviewsCount: 235
  },
  {
    id: 'adv-002',
    slug: 'arenal-river-tubing-adventure',
    title: 'Arenal River Tubing',
    shortDescription: 'Fun and refreshing river tubing experience.',
    description: 'Fun and refreshing river tubing experience combining mild rapids and jungle scenery.',
    duration: '3 hours',
    difficulty: 'Moderate',
    category: 'Water',
    highlights: ['River Tubing', 'Refreshing Swim', 'Adrenaline Mix'],
    image: '/images/tours/tubing/tour-photo.jpg',
    isResale: false,
    variants: [
      { id: 'standard', label: 'Standard', price: { rack: 60 }, includesTransport: false }
    ],
    rating: 5,
    reviewsCount: 42
  },

  // =========================
  // 🧘 RELAXATION & CULTURE
  // =========================
  {
    id: 'culture-001',
    slug: 'chocolate-tour-roots-experience',
    title: 'Chocolate Tour – Roots Experience',
    shortDescription: 'Sensory and cultural cacao experience.',
    description: 'A sensory and cultural cacao experience based on Costa Rican ancestral traditions.',
    duration: '1.5 hours',
    difficulty: 'Easy',
    category: 'Relax',
    highlights: ['Ancestral Tradition', 'Cacao Ritual', 'Organic Chocolate'],
    image: '/images/tours/chocolate/chocolate1.webp',
    isResale: false,
    variants: [
      { id: 'standard', label: 'Standard', price: { rack: 40 }, includesTransport: false }
    ],
    rating: 5,
    reviewsCount: 156
  },

  // =========================
  // 🔗 MINI COMBOS (HALF DAY)
  // =========================
  {
    id: 'combo-001',
    slug: 'mini-combo-1-volcano-hike-waterfall',
    title: 'Mini Combo #1 – Volcano Hike + Waterfall + Lunch',
    shortDescription: 'Balanced combination of hiking and waterfall.',
    description: 'A balanced combination of hiking, nature and a refreshing waterfall visit.',
    duration: '6 hours',
    difficulty: 'Moderate',
    category: 'Combo',
    highlights: ['Volcano Hike', 'La Fortuna Waterfall', 'Typical Lunch'],
    image: 'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/31ff8702-fb01-4810-a47e-819fa6b6c600/public',
    images: [
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/4af0dd6f-30c8-408d-131a-91c2451bc400/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/400d9c5f-d7cb-437a-84da-84f434688c00/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/c43721f6-ba93-473e-0422-d3913e73f400/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/304a6d73-59e7-4897-eab0-27bf1e9bc400/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/6d99005c-b835-4e62-9aff-1a953e552000/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/e482a807-7096-429a-cc19-7fe7e0fe5600/public',
      'https://imagedelivery.net/Lh5ivcu1Gl9SRBAdYRSP2g/d80ff05f-7e97-4408-5246-b00cfbac2800/public'
    ],
    isResale: true,
    variants: [
      { id: 'standard', label: 'Standard', price: { rack: 152 }, includesTransport: true, includesLunch: true },
      { id: 'hot-springs', label: 'With Hot Springs', price: { rack: 205 }, includesTransport: true, includesLunch: true, includesHotSprings: true }
    ],
    rating: 5,
    reviewsCount: 88
  },
  {
    id: 'combo-002',
    slug: 'mini-combo-2-hanging-bridges-waterfall',
    title: 'Mini Combo #2 – Hanging Bridges + Waterfall + Lunch',
    shortDescription: 'Explore the rainforest from above and enjoy a waterfall.',
    description: 'Explore the rainforest from above and enjoy a waterfall and traditional lunch.',
    duration: '6 hours',
    difficulty: 'Moderate',
    category: 'Combo',
    highlights: ['Hanging Bridges', 'Waterfall Visit', 'Traditional Lunch'],
    image: '/images/tours/canyoning/canyoning3.webp',
    isResale: true,
    variants: [
      { id: 'standard', label: 'Standard', price: { rack: 159 }, includesTransport: true, includesLunch: true },
      { id: 'hot-springs', label: 'With Hot Springs', price: { rack: 212 }, includesTransport: true, includesLunch: true, includesHotSprings: true }
    ],
    rating: 5,
    reviewsCount: 112
  },
  {
    id: 'combo-003',
    slug: 'mini-combo-3-safari-float-waterfall',
    title: 'Mini Combo #3 – Safari Float + Waterfall + Lunch',
    shortDescription: 'Wildlife observation combined with a waterfall.',
    description: 'Wildlife observation combined with a waterfall visit and lunch.',
    duration: '6 hours',
    difficulty: 'Easy',
    category: 'Combo',
    highlights: ['River Float', 'Waterfall Swim', 'Nature Relaxation'],
    image: '/images/tours/float/DSC_1329.webp',
    isResale: true,
    variants: [
      { id: 'standard', label: 'Standard', price: { rack: 144 }, includesTransport: true, includesLunch: true },
      { id: 'hot-springs', label: 'With Hot Springs', price: { rack: 198 }, includesTransport: true, includesLunch: true, includesHotSprings: true }
    ],
    rating: 5,
    reviewsCount: 94
  },
  {
    id: 'combo-004',
    slug: 'mini-combo-4-chocolate-waterfall',
    title: 'Mini Combo #4 – Chocolate Tour + Waterfall + Lunch',
    shortDescription: 'Cultural chocolate combined with nature.',
    description: 'Cultural chocolate experience combined with nature and relaxation.',
    duration: '5 hours',
    difficulty: 'Easy',
    category: 'Combo',
    highlights: ['Chocolate Ritual', 'Waterfall Swim', 'Typical Lunch'],
    image: '/images/tours/chocolate/chocolate2.webp',
    isResale: true,
    variants: [
      { id: 'standard', label: 'Standard', price: { rack: 173 }, includesTransport: true, includesLunch: true },
      { id: 'hot-springs', label: 'With Hot Springs', price: { rack: 228 }, includesTransport: true, includesLunch: true, includesHotSprings: true }
    ],
    rating: 5,
    reviewsCount: 76
  },
  {
    id: 'combo-005',
    slug: 'mini-combo-5-private-combo',
    title: 'Mini Combo #5 – Private Combo',
    shortDescription: 'Private guided combo experience.',
    description: 'Private guided combo experience for a more personalized adventure.',
    duration: 'Flexible',
    difficulty: 'Moderate',
    category: 'Combo',
    highlights: ['Private Guide', 'Custom Itinerary', 'Premium Focus'],
    image: '/images/tours/float/_ANF0230.webp',
    isResale: true,
    variants: [
      { id: 'private', label: 'Private (Fixed Price)', price: { rack: 260 }, includesTransport: true, private: true }
    ],
    rating: 5,
    reviewsCount: 31
  },
  {
    id: 'combo-006',
    slug: 'combo-twilight-sloth-night-walk',
    title: 'Combo Twilight (Sloth Tour + Night Walk)',
    shortDescription: 'Unique experience combining day and night wildlife.',
    description: 'A unique experience combining daytime and nighttime wildlife observation.',
    duration: '5 hours',
    difficulty: 'Moderate',
    category: 'Combo',
    highlights: ['Day Sloths', 'Night Frogs', 'Sunset Transition'],
    image: '/images/tours/float/IMG_9604.webp',
    isResale: true,
    variants: [
      { id: 'standard', label: 'Standard', price: { rack: 139 }, includesTransport: true }
    ],
    rating: 5,
    reviewsCount: 184
  },
  {
    id: 'combo-007',
    slug: 'full-day-combination-tour',
    title: 'Full Day Combination Tour',
    shortDescription: 'A full day exploring Arenal highlights.',
    description: 'A full day exploring Arenal highlights including volcano trails, hanging bridges and waterfalls.',
    duration: 'Full day',
    difficulty: 'Hard',
    category: 'Combo',
    highlights: ['Hanging Bridges', 'Waterfall Rappel', 'Volcano Hike', 'Lunch & Dinner'],
    image: '/images/tours/canyoning/canyoning1.webp',
    isResale: true,
    variants: [
      { id: 'standard', label: 'Full Day Standard', price: { rack: 198 }, includesTransport: true, includesLunch: true },
      { id: 'baldi', label: 'With Baldi & Dinner', price: { rack: 250 }, includesTransport: true, includesLunch: true, includesHotSprings: true, hotSpringsProvider: 'Baldi' },
      { id: 'ecotermales', label: 'With Ecotermales & Dinner', price: { rack: 270 }, includesTransport: true, includesLunch: true, includesHotSprings: true, hotSpringsProvider: 'Ecotermales' }
    ],
    rating: 5,
    reviewsCount: 126
  },

  // =========================
  // 🔥 HOT SPRINGS EXTENSIONS
  // =========================
  {
    id: 'hotsprings-001',
    slug: 'any-tour-baldi-hot-springs',
    title: 'Any Tour + Baldi Hot Springs',
    shortDescription: 'Upgrade your tour with Baldi Hot Springs.',
    description: 'Upgrade your tour with Baldi Hot Springs entrance and meal.',
    duration: '3 hours',
    difficulty: 'Easy',
    category: 'HotSprings',
    highlights: ['Mineral Pools', 'Typical Meal', 'Relaxing Environment'],
    image: '/images/tours/float/20250209_075018.webp',
    isResale: true,
    variants: [
      { id: 'adult', label: 'Adult Extension', price: { rack: 45 }, includesTransport: false, includesHotSprings: true, hotSpringsProvider: 'Baldi' }
    ],
    rating: 5,
    reviewsCount: 442
  },
  {
    id: 'hotsprings-002',
    slug: 'any-tour-paradise-hot-springs',
    title: 'Any Tour + Paradise Hot Springs',
    shortDescription: 'Relax after your adventure with Paradise.',
    description: 'Relax after your adventure with Paradise Hot Springs and meal.',
    duration: '3 hours',
    difficulty: 'Easy',
    category: 'HotSprings',
    highlights: ['Natural Springs', 'Garden Views', 'Quiet Relax'],
    image: '/images/tours/float/20240415_082456.webp',
    isResale: true,
    variants: [
      { id: 'adult', label: 'Adult Extension', price: { rack: 42 }, includesTransport: false, includesHotSprings: true, hotSpringsProvider: 'Paradise' }
    ],
    rating: 5,
    reviewsCount: 215
  },
  {
    id: 'hotsprings-003',
    slug: 'any-tour-ecotermales',
    title: 'Any Tour + Ecotermales',
    shortDescription: 'Premium hot springs experience with dinner.',
    description: 'Premium hot springs experience with dinner included.',
    duration: '3 hours',
    difficulty: 'Easy',
    category: 'HotSprings',
    highlights: ['Premium Thermal Pools', 'Lush Gardens', 'Gourmet Dinner'],
    image: '/images/tours/float/20240415_082403.webp',
    isResale: true,
    variants: [
      { id: 'adult', label: 'Adult Extension', price: { rack: 65 }, includesTransport: false, includesHotSprings: true, hotSpringsProvider: 'Ecotermales' }
    ],
    rating: 5,
    reviewsCount: 178
  },
];
