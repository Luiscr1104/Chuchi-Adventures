import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Star } from 'lucide-react';
import { cn } from '../lib/utils';
import type { Tour } from '../data/tours';

interface TourCardProps {
    tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
    const minPrice = tour.variants.length > 0 ? Math.min(...tour.variants.map(v => v.price.rack)) : 0;

    // Helper to render TripAdvisor-style bubbles
    const renderBubbles = (rating: number = 5) => {
        return (
            <div className="flex gap-[2px] items-center">
                {[...Array(5)].map((_, i) => {
                    const filled = i < Math.floor(rating);
                    const half = !filled && i < rating;
                    return (
                        <div
                            key={i}
                            className={cn(
                                "w-2.5 h-2.5 rounded-full border border-emerald-500",
                                filled ? "bg-emerald-500" : half ? "bg-gradient-to-r from-emerald-500 from-50% to-transparent to-50%" : "bg-transparent"
                            )}
                        />
                    );
                })}
            </div>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-full group"
        >
            <a href={`/tours/${tour.slug}`} className="relative block h-full bg-white rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden">
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                        src={tour.image}
                        alt={tour.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                    />

                    {/* Minimalist Multi-Badge */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                        <div className="bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                            {tour.category}
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                    {/* Top Row: TripAdvisor Integration */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-4 h-4 text-emerald-600">
                            <svg viewBox="0 -96 512.2 512.2" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                <path d="M128.2 127.9C92.7 127.9 64 156.6 64 192c0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1.1-35.4-28.6-64.1-64-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S174 166.7 174 192s-20.5 45.9-45.8 45.9z" /><circle cx="128.4" cy="191.9" r="31.9" /><path d="M384.2 127.9c-35.4 0-64.1 28.7-64.1 64.1 0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1 0-35.4-28.7-64.1-64.1-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S430 166.7 430 192s-20.5 45.9-45.8 45.9z" /><circle cx="384.4" cy="191.9" r="31.9" /><path d="M474.4 101.2l37.7-37.4h-76.4C392.9 29 321.8 0 255.9 0c-66 0-136.5 29-179.3 63.8H0l37.7 37.4C14.4 124.4 0 156.5 0 192c0 70.8 57.4 128.2 128.2 128.2 32.5 0 62.2-12.1 84.8-32.1l43.4 31.9 42.9-31.2-.5-1.2c22.7 20.2 52.5 32.5 85.3 32.5 70.8 0 128.2-57.4 128.2-128.2-.1-35.4-14.6-67.5-37.9-90.7zM368 64.8c-60.7 7.6-108.3 57.6-111.9 119.5-3.7-62-51.4-112.1-112.3-119.5 30.6-22 69.6-32.8 112.1-32.8S337.4 42.8 368 64.8zM128.2 288.2C75 288.2 32 245.1 32 192s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2zm256 0c-53.1 0-96.2-43.1-96.2-96.2s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2z" /></svg>
                        </div>
                        {renderBubbles(tour.rating)}
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter" aria-label={`${tour.reviewsCount || 0} reviews on TripAdvisor`}>
                            {tour.reviewsCount || 0} reviews
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold leading-tight text-slate-900 mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                        {tour.title}
                    </h3>

                    <p className="text-slate-500 text-[15px] leading-relaxed line-clamp-2 mb-8">
                        {tour.shortDescription || tour.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Duration</span>
                            <div className="flex items-center gap-1.5 text-slate-900 font-bold text-sm">
                                <Clock className="w-4 h-4 text-slate-500" />
                                {tour.duration}
                            </div>
                        </div>

                        <div className="flex flex-col items-end">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">From</span>
                            <div className="text-2xl font-black text-slate-900 leading-none">
                                <span className="text-[0.6em] align-top mt-1 mr-0.5 opacity-60">$</span>
                                {minPrice}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </motion.div>
    );
}
