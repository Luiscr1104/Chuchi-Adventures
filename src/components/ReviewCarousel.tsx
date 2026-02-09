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
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.1 13.5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5zM4.9 13.5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5zM12 2a10 10 0 0 0-10 10c0 1.2.2 2.3.6 3.4L0 22l6.6-2.6a10 10 0 1 0 5.4-17.4zM19.1 20a4 4 0 0 0 0-8 4 4 0 0 0 0 8zM15.5 8c0 .6-.5 1-1 1s-1-.4-1-1 .5-1 1-1 1 .4 1 1zM4.9 20a4 4 0 0 0 0-8 4 4 0 0 0 0 8zM10.5 8c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1z" />
                </svg>
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
