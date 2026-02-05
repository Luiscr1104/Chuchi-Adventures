export interface SpaService {
    id: string;
    name: string;
    duration: string;
    description: string;
    category: 'Massages' | 'Targeted' | 'Facial & Body' | 'Packages';
    isPremium?: boolean;
}

export const spaServices: SpaService[] = [
    // 1. Specialized Massages
    {
        id: 'relaxing-massage',
        name: 'Relaxing Massage',
        duration: '1h',
        description: 'Helps reduce headaches and back pain, decreases stress, blood pressure, and improves circulation.',
        category: 'Massages'
    },
    {
        id: 'therapeutic-massage',
        name: 'Therapeutic Massage',
        duration: '1h',
        description: 'Improves blood circulation and treats injuries in tendons and ligaments.',
        category: 'Massages'
    },
    {
        id: 'deep-tissue-massage',
        name: 'Deep Tissue Massage',
        duration: '1h',
        description: 'Focused on relaxing muscles, reducing fatigue, and increasing serotonin levels.',
        category: 'Massages'
    },
    {
        id: 'four-hands-massage',
        name: 'Four Hands Massage',
        duration: '1h',
        description: 'Technique performed by two therapists simultaneously to reduce stress and oxygenate tissues.',
        category: 'Massages'
    },
    {
        id: 'decontracting-massage',
        name: 'Decontracting Massage',
        duration: '1h',
        description: 'Designed to relieve muscle spasms and improve elasticity.',
        category: 'Massages'
    },
    {
        id: 'hot-stone-massage',
        name: 'Hot Stone Massage',
        duration: '1h',
        description: 'The heat from the stones promotes toxin elimination and joint relaxation.',
        category: 'Massages'
    },

    // 2. Targeted Treatments
    {
        id: 'back-shoulder-cranial',
        name: 'Back, Shoulder & Cranial',
        duration: '40 min',
        description: 'Massage in skull, face, and neck to reduce daily tension.',
        category: 'Targeted'
    },
    {
        id: 'tired-legs-massage',
        name: 'Tired Legs Massage',
        duration: '45 min',
        description: 'Recommended after intense training to improve skin appearance and circulation.',
        category: 'Targeted'
    },
    {
        id: 'reflexology',
        name: 'Reflexology',
        duration: '40 min',
        description: 'Relieves neck, head, and ear pain, and also reduces insomnia.',
        category: 'Targeted'
    },
    {
        id: 'lymphatic',
        name: 'Lymphatic',
        duration: '1h',
        description: 'Helps eliminate toxins, reduce weight, and improve the immune system.',
        category: 'Targeted'
    },

    // 3. Facial & Body
    {
        id: 'facials',
        name: 'Professional Facials',
        duration: '20-60 min',
        description: 'Rejuvenating (30m), Anti-acne (20m), Purifying (20m), Moisturizing (20m), and Deep Facial (1h).',
        category: 'Facial & Body'
    },
    {
        id: 'body-wraps',
        name: 'Artisanal Body Wraps',
        duration: '1h',
        description: 'Choice of Mud, Chocolate, or Aloe Vera to detoxify and nourish your skin.',
        category: 'Facial & Body'
    },
    {
        id: 'mani-pedi',
        name: 'Professional Mani & Pedi',
        duration: '1h 30 min',
        description: 'Prevents nail deformities and eliminates dead cells for healthy, elegant hands and feet.',
        category: 'Facial & Body'
    },

    // 4. Premium Packages
    {
        id: 'coffee-caress',
        name: 'Coffee Caress',
        duration: '1h 30m',
        description: 'Relaxing massage, coffee exfoliation, and moisturising mini facial.',
        category: 'Packages',
        isPremium: true
    },
    {
        id: 'tropical-forests',
        name: 'Tropical Forests',
        duration: '1h 15m',
        description: 'Relaxing massage, fruit wrap, and aloe mini facial.',
        category: 'Packages',
        isPremium: true
    },
    {
        id: 'volcanic-experience',
        name: 'Volcanic Experience',
        duration: '1h 30m',
        description: 'Deep massage, volcanic mud wrap, and clay mini facial.',
        category: 'Packages',
        isPremium: true
    },
    {
        id: 'roots-experience',
        name: 'Roots Experience: Cacao Ritual',
        duration: '1h 30m',
        description: 'A deep medicinal journey: Therapeutic massage, artisanal chocolate wrap, hydrating cacao mask, and specialized reflexology.',
        category: 'Packages',
        isPremium: true
    },
    {
        id: 'couples-massage',
        name: 'Couples Massage',
        duration: '1h 15m',
        description: 'Simultaneous experience for two. Includes mini facial, foot reflexology, and relaxing massage.',
        category: 'Packages',
        isPremium: true
    }
];
