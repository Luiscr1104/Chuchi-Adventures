import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext, 
  CarouselDots 
} from './ui/carousel';

interface TourCarouselProps {
  images: string[];
  title: string;
  className?: string;
}

export default function TourCarousel({ images, title, className }: TourCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Don't render if no images
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className={`space-y-6 ${className || ''}`}>
      {/* Header with rustic styling */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-stone-900 relative">
          <span className="absolute -left-3 -top-1 text-2xl text-stone-600">🌿</span>
          Photo Gallery
          <span className="absolute -right-3 -top-1 text-2xl text-stone-600">🌿</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-stone-300 via-stone-600 to-stone-300 mx-auto rounded-full"></div>
      </div>

      {/* Main carousel */}
      <Carousel className="bg-stone-100 border-2 border-stone-300 shadow-2xl">
        <CarouselContent
          className="flex"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <AnimatePresence mode="wait">
            {images.map((image, index) => (
              <CarouselItem key={`${image}-${index}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-xl"
                >
                  <img
                    src={image}
                    alt={`${title} - Photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* Overlay with adventure texture */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Photo counter */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-stone-700 border border-stone-200">
                    {index + 1} / {images.length}
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </AnimatePresence>
        </CarouselContent>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <CarouselPrevious 
              onClick={goToPrevious}
              disabled={images.length === 1}
              className="left-4 bg-stone-100/90 border-stone-300 hover:bg-stone-50"
            />
            <CarouselNext 
              onClick={goToNext}
              disabled={images.length === 1}
              className="right-4 bg-stone-100/90 border-stone-300 hover:bg-stone-50"
            />
          </>
        )}

        {/* Dots indicator */}
        {images.length > 1 && (
          <CarouselDots 
            count={images.length}
            active={currentIndex}
            className="bottom-4"
          />
        )}
      </Carousel>

      {/* Adventure quote */}
      <blockquote className="text-center italic text-stone-600 text-sm md:text-base px-6 py-3 bg-stone-50 rounded-xl border border-stone-200">
        <span className="text-lg">"</span>
        Every image tells a story of adventure
        <span className="text-lg">"</span>
      </blockquote>
    </section>
  );
}