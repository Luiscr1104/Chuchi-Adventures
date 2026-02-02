import React, { useState, useEffect } from 'react';
import TourCard from './TourCard';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { Tour } from '../data/tours';

interface ToursPageProps {
  tours: Tour[];
}

export default function ToursPage({ tours }: ToursPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredTours, setFilteredTours] = useState<Tour[]>(tours);

  // Get unique categories from tours
  const categories = [...new Set(tours.map(tour => tour.category))];

  // URL synchronization - read URL params on mount and handle browser navigation
  useEffect(() => {
    // Get initial category from URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    setSelectedCategory(category);

    // Handle browser back/forward navigation
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const categoryFromUrl = params.get('category');
      setSelectedCategory(categoryFromUrl);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update filtered tours when category changes
  useEffect(() => {
    if (selectedCategory) {
      setFilteredTours(tours.filter(tour => tour.category === selectedCategory));
    } else {
      setFilteredTours(tours);
    }
  }, [selectedCategory, tours]);

  // Handle category selection
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    
    // Update URL without page reload
    const url = new URL(window.location.href);
    if (category) {
      url.searchParams.set('category', category);
    } else {
      url.searchParams.delete('category');
    }
    window.history.pushState({}, '', url);
  };

  return (
    <div className="container-custom">
      {/* Category Filter UI */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar">
        <Button
          variant={!selectedCategory ? "default" : "outline"}
          onClick={() => handleCategoryChange(null)}
          className="px-6 py-2 rounded-full text-sm font-semibold transition-all"
        >
          All Tours
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            onClick={() => handleCategoryChange(cat)}
            className="px-6 py-2 rounded-full text-sm font-semibold transition-all"
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Tours Grid */}
      {filteredTours.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🌿</div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">
            No tours found
          </h3>
          <p className="text-slate-500">
            We couldn't find any tours in the "{selectedCategory}" category.
          </p>
          <Button
            variant="default"
            onClick={() => handleCategoryChange(null)}
            className="mt-6"
          >
            View all tours
          </Button>
        </div>
      )}
    </div>
  );
}