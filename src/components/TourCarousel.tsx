import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from './ui/carousel';

interface TourCarouselProps {
  images: string[];
  title: string;
  className?: string;
}

export default function TourCarousel({ images, title, className }: TourCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [errorImages, setErrorImages] = useState<Record<number, boolean>>({});
  const imgRefs = useRef<Record<number, HTMLImageElement | null>>({});

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index: number) => {
    console.error(`Failed to load image: ${images[index]}`);
    setErrorImages(prev => ({ ...prev, [index]: true }));
  };

  // Effect to check if images are already complete (cached)
  useEffect(() => {
    images.forEach((src, index) => {
      const img = imgRefs.current[index];
      if (img && img.complete) {
        handleImageLoad(index);
      }
    });
  }, [images]);

  if (!images || images.length === 0) {
    return null;
  }

  const itemWidthPercent = 100 / images.length;
  const translationValue = currentIndex * itemWidthPercent;

  return (
    <section className={`space-y-8 ${className || ''}`}>
      <div className="text-center space-y-3">
        <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter uppercase">
          Photo <span className="text-emerald-600">Gallery</span>
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-8 bg-stone-300"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400">Captured Moments</span>
          <div className="h-px w-8 bg-stone-300"></div>
        </div>
      </div>

      <div className="relative group">
        <Carousel className="bg-white border border-stone-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden rounded-[2.5rem]">
          <CarouselContent
            style={{
              transform: `translateX(-${translationValue}%)`,
              width: `${images.length * 100}%`
            }}
          >
            {images.map((image, index) => (
              <CarouselItem
                key={`${image}-${index}`}
                style={{ width: `${itemWidthPercent}%` }}
                className="px-0"
              >
                <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden bg-stone-50">
                  <img
                    ref={el => imgRefs.current[index] = el}
                    src={image}
                    alt={`${title} - Photo ${index + 1}`}
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                    className={`w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                    style={{ display: errorImages[index] ? 'none' : 'block' }}
                  />

                  {(!loadedImages[index] && !errorImages[index]) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-stone-50 z-10">
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-2 border-emerald-600/20 border-t-emerald-600 rounded-full animate-spin"></div>
                        <span className="text-stone-400 text-[10px] font-black uppercase tracking-widest animate-pulse">Developing adventure...</span>
                      </div>
                    </div>
                  )}

                  {errorImages[index] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-stone-50 z-10">
                      <div className="text-center p-8">
                        <span className="text-stone-300 block mb-4 text-4xl">📷</span>
                        <span className="text-stone-400 text-xs font-bold uppercase tracking-widest">Image Unavailable</span>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent pointer-events-none"></div>

                  <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-2xl text-[10px] font-black text-white border border-white/20 shadow-2xl">
                    {index + 1} / {images.length}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {images.length > 1 && (
            <>
              <CarouselPrevious
                onClick={goToPrevious}
                className="left-8 w-14 h-14 bg-white/10 backdrop-blur-xl border-white/20 text-white hover:bg-white hover:text-stone-900 transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
              />
              <CarouselNext
                onClick={goToNext}
                className="right-8 w-14 h-14 bg-white/10 backdrop-blur-xl border-white/20 text-white hover:bg-white hover:text-stone-900 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
              />
            </>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex ? 'bg-white w-12 shadow-[0_0_20px_rgba(255,255,255,0.5)]' : 'bg-white/30 hover:bg-white/50 w-3'}`}
                  aria-label={`Ir a foto ${index + 1}`}
                />
              ))}
            </div>
          )}
        </Carousel>
      </div>

      <div className="flex justify-center">
        <blockquote className="max-w-2xl text-center">
          <p className="text-stone-400 text-lg md:text-xl font-light italic leading-relaxed">
            "Every frame is a heartbeat of the Costa Rican soul, preserved for your memory."
          </p>
        </blockquote>
      </div>
    </section>
  );
}
