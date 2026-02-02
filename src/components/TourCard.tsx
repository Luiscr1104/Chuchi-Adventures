import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, ArrowRight } from 'lucide-react';
import type { Tour } from '../data/tours';

interface TourCardProps {
    tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="h-full"
        >
            <a href={`/tours/${tour.slug}`} className="block h-full">
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <motion.img
                            src={tour.image}
                            alt={tour.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                        />
                        <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="text-sm font-bold shadow-sm backdrop-blur-md bg-white/90">
                                ${tour.price}
                            </Badge>
                        </div>
                        <div className="absolute top-4 left-4">
                            <Badge className={
                                tour.difficulty === 'Easy' ? 'bg-green-500 hover:bg-green-600' :
                                    tour.difficulty === 'Moderate' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-red-500 hover:bg-red-600'
                            }>
                                {tour.difficulty}
                            </Badge>
                        </div>
                    </div>

                    <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                            <Badge variant="outline" className="mb-2 text-xs uppercase tracking-wider text-gray-500 border-gray-200">
                                {tour.category}
                            </Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-[var(--color-primary)] transition-colors">
                            {tour.title}
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="pb-4 flex-grow">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {tour.duration}
                            </span>
                        </div>
                        <CardDescription className="line-clamp-3">
                            {tour.description}
                        </CardDescription>
                    </CardContent>

                    <CardFooter className="pt-0">
                        <Button className="w-full group-hover:bg-[var(--color-primary-dark)] transition-colors">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </CardFooter>
                </Card>
            </a>
        </motion.div>
    );
}
