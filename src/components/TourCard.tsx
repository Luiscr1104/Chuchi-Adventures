import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, ArrowRight, Star } from 'lucide-react';
import type { Tour } from '../data/tours';

interface TourCardProps {
    tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -12 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
        >
            <a href={`/tours/${tour.slug}`} className="block h-full">
                <Card className="h-full overflow-hidden border-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(45,106,79,0.1)] transition-all duration-700 flex flex-col group rounded-[2rem]">
                    <div className="relative aspect-[4/5] overflow-hidden">
                        <motion.img
                            src={tour.image}
                            alt={tour.title}
                            width={800}
                            height={1000}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                        />

                        {/* Glassmorphic Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                        <div className="absolute top-6 right-6">
                            <Badge className="bg-[var(--color-secondary)] text-slate-900 border-0 text-xl font-black px-5 py-2.5 rounded-2xl shadow-2xl">
                                ${tour.price}
                            </Badge>
                        </div>

                        <div className="absolute bottom-8 left-8 right-8 text-white z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex items-center gap-2 mb-3">
                                <Badge className="bg-[var(--color-secondary)] text-slate-900 font-bold uppercase tracking-widest text-[10px] px-3">
                                    {tour.category}
                                </Badge>
                                <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-white/80">
                                    <Clock className="w-3 h-3 text-[var(--color-secondary)]" />
                                    {tour.duration}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold leading-tight tracking-tight mb-2">
                                {tour.title}
                            </h3>
                        </div>
                    </div>

                    <CardContent className="pt-8 pb-8 px-8 flex-grow">
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 font-medium">
                            {tour.description}
                        </p>
                    </CardContent>

                    <CardFooter className="px-8 pb-8 pt-0">
                        <div className="w-full flex items-center justify-between group/btn">
                            <span className="text-slate-900 font-black uppercase tracking-widest text-xs group-hover/btn:text-[var(--color-primary)] transition-colors">
                                View Expedition
                            </span>
                            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-[var(--color-primary)] group-hover/btn:text-white transition-all duration-500">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </a>
        </motion.div>
    );
}
