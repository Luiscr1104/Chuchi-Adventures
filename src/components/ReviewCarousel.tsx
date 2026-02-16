import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import type { TourReview } from '../data/reviews';

// Platform Icons (Simplified SVGs for trust)
const PlatformIcon = ({ source }: { source: string }) => {
    switch (source) {
        case 'Google':
            return (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.92 3.52-2.12 4.76a9.42 9.42 0 0 1-5.72 2.04c-5.24 0-9.48-4.24-9.48-9.48s4.24-9.48 9.48-9.48c2.84 0 5.48 1.04 7.48 2.84l2.4-2.4C19.8 1.28 16.2 0 12 0 5.36 0 0 5.36 0 12s5.36 12 12 12c3.6 0 6.6-1.2 8.8-3.2 2.2-2 3.4-5 3.4-8.8 0-.6 0-1.2-.2-1.8h-11.52z" />
                </svg>
            );
        case 'Tripadvisor':
            return (
                <svg className="w-6 h-6" viewBox="0 -96 512.2 512.2" fill="currentColor">
                    <path d="M128.2 127.9C92.7 127.9 64 156.6 64 192c0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1.1-35.4-28.6-64.1-64-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S174 166.7 174 192s-20.5 45.9-45.8 45.9z" /><circle cx="128.4" cy="191.9" r="31.9" /><path d="M384.2 127.9c-35.4 0-64.1 28.7-64.1 64.1 0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1 0-35.4-28.7-64.1-64.1-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S430 166.7 430 192s-20.5 45.9-45.8 45.9z" /><circle cx="384.4" cy="191.9" r="31.9" /><path d="M474.4 101.2l37.7-37.4h-76.4C392.9 29 321.8 0 255.9 0c-66 0-136.5 29-179.3 63.8H0l37.7 37.4C14.4 124.4 0 156.5 0 192c0 70.8 57.4 128.2 128.2 128.2 32.5 0 62.2-12.1 84.8-32.1l43.4 31.9 42.9-31.2-.5-1.2c22.7 20.2 52.5 32.5 85.3 32.5 70.8 0 128.2-57.4 128.2-128.2-.1-35.4-14.6-67.5-37.9-90.7zM368 64.8c-60.7 7.6-108.3 57.6-111.9 119.5-3.7-62-51.4-112.1-112.3-119.5 30.6-22 69.6-32.8 112.1-32.8S337.4 42.8 368 64.8zM128.2 288.2C75 288.2 32 245.1 32 192s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2zm256 0c-53.1 0-96.2-43.1-96.2-96.2s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2z" /></svg>
            );
        default:
            return <Quote className="w-5 h-5 text-slate-300" />;
    }
};

interface ReviewCarouselProps {
    reviews: TourReview[];
}

export default function ReviewCarousel({ reviews }: ReviewCarouselProps) {
    // Simple infinite loop strategy: triplicate the array
    const duplicatedReviews = [...reviews, ...reviews, ...reviews];

    return (
        <div className="relative w-full overflow-hidden py-10">
            <motion.div
                className="flex gap-8"
                animate={{
                    x: ["0%", "-33.33%"],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {duplicatedReviews.map((review, idx) => (
                    <div
                        key={`${review.id}-${idx}`}
                        className="flex-shrink-0 w-[300px] md:w-[400px] bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group relative"
                    >
                        <div className="absolute top-6 right-8 text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Quote size={48} />
                        </div>

                        <div className="flex gap-1 mb-4 text-emerald-500">
                            {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} size={16} fill="currentColor" />
                            ))}
                        </div>

                        <p className="text-slate-600 italic mb-8 leading-relaxed line-clamp-4 relative z-10">
                            "{review.text}"
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center font-bold text-slate-400 group-hover:bg-[var(--color-secondary)] group-hover:text-slate-900 transition-colors">
                                    {review.author[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm whitespace-nowrap">
                                        {review.author}
                                    </h4>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">
                                        {review.location || 'Explorer'}
                                    </p>
                                </div>
                            </div>

                            <div className={`p-2 rounded-xl flex items-center gap-2 ${review.source === 'Google' ? 'text-blue-500 bg-blue-50' :
                                review.source === 'Tripadvisor' ? 'text-emerald-600 bg-emerald-50' :
                                    'text-slate-400 bg-slate-50'
                                }`}>
                                <PlatformIcon source={review.source || ''} />
                                <span className="text-[9px] font-black uppercase tracking-tighter pr-1">
                                    {review.source}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Gradient Overlays for smooth entry/exit */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
    );
}
