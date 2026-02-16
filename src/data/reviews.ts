export type ReviewSource = 'Google' | 'Tripadvisor' | 'Viator' | 'Airbnb' | 'WhatsApp' | 'Manual';

export interface TourReview {
    id: string;
    tourSlug: string; // debe match con tours.ts
    author: string;
    rating: 5 | 4 | 3 | 2 | 1;
    text: string;
    date?: string; // "2026-01-20"
    source?: ReviewSource;
    location?: string; // opcional: "USA", "Canada", etc.
}

export const reviews: TourReview[] = [
    // === Safari Float Peñas Blancas ===
    {
        id: 'rev-pb-001',
        tourSlug: 'safari-float-penas-blancas-raft',
        author: 'Emily R.',
        rating: 5,
        text: 'So peaceful and full of wildlife — we saw sloths, monkeys and lots of birds. The guide was incredible.',
        date: '2026-01-15',
        source: 'Tripadvisor',
        location: 'USA',
    },
    {
        id: 'rev-pb-002',
        tourSlug: 'safari-float-penas-blancas-raft',
        author: 'Daniel S.',
        rating: 5,
        text: 'Perfect for families. Calm float, great explanations, and the local snack after the tour was amazing.',
        date: '2026-01-10',
        source: 'Google',
        location: 'Canada',
    },

    // === Rafting Sarapiquí / Balsa ===
    {
        id: 'rev-raft-001',
        tourSlug: 'white-water-rafting-sarapiqui',
        author: 'Mark D.',
        rating: 5,
        text: 'Fun rapids and very safe. Great for first-timers. Lunch was delicious and the staff were super friendly.',
        date: '2026-01-22',
        source: 'Google',
        location: 'UK',
    },

    // === Canyoning ===
    {
        id: 'rev-canyon-001',
        tourSlug: 'canyoning-waterfall-rappelling-arenal',
        author: 'Sofia P.',
        rating: 5,
        text: 'Adrenaline all the way! Amazing waterfalls and professional guides. One of the best things we did in La Fortuna.',
        date: '2026-01-05',
        source: 'Tripadvisor',
        location: 'Spain',
    },

    // === Kayak / Lake ===
    {
        id: 'rev-kayak-001',
        tourSlug: 'arenal-lake-kayak',
        author: 'Chris M.',
        rating: 5,
        text: 'Beautiful views of Arenal Volcano. Calm waters and a nice fruit snack at the end. Highly recommended.',
        date: '2026-01-28',
        source: 'Google',
        location: 'USA',
    },

];
