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
    <section className={`space-y-6 ${className || ''}`}>
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-stone-900 relative">
          <span className="absolute -left-3 -top-1 text-2xl text-stone-600">🌿</span>
          Photo Gallery
          <span className="absolute -right-3 -top-1 text-2xl text-stone-600">🌿</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-stone-300 via-stone-600 to-stone-300 mx-auto rounded-full"></div>
      </div>

      <Carousel className="bg-stone-100 border-2 border-stone-300 shadow-2xl overflow-hidden rounded-2xl">
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
              className="px-2"
            >
              <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-xl bg-stone-200">
                <img
                  ref={el => imgRefs.current[index] = el}
                  src={image}
                  alt={`${title} - Photo ${index + 1}`}
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageError(index)}
                  className={`w-full h-full object-cover transition-all duration-700 ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                  style={{ display: errorImages[index] ? 'none' : 'block' }}
                />

                {(!loadedImages[index] && !errorImages[index]) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-stone-100 z-10">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-stone-500 font-medium animate-pulse">Cargando aventura...</span>
                    </div>
                  </div>
                )}

                {errorImages[index] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-stone-100 z-10">
                    <div className="text-center p-4">
                      <span className="text-stone-400 block mb-2">📷</span>
                      <span className="text-stone-400 text-sm">No se pudo cargar la imagen</span>
                      <p className="text-[10px] text-stone-300 mt-1">{image}</p>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-stone-700 border border-stone-200 shadow-sm">
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
              className="left-4 bg-white/95 border-stone-200 hover:bg-white shadow-md"
            />
            <CarouselNext
              onClick={goToNext}
              className="right-4 bg-white/95 border-stone-200 hover:bg-white shadow-md"
            />
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${index === currentIndex ? 'bg-emerald-600 w-8' : 'bg-white/70 hover:bg-white w-2.5'}`}
                aria-label={`Ir a foto ${index + 1}`}
              />
            ))}
          </div>
        )}
      </Carousel>

      <blockquote className="text-center italic text-stone-500 text-sm md:text-base px-6 py-4 bg-stone-50/50 rounded-2xl border border-stone-100">
        "Cada imagen cuenta una historia de pura vida"
      </blockquote>
    </section>
  );
}
