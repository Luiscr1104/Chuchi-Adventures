import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * Generates an optimized image URL for Cloudflare Image Delivery or Unsplash.
 */
export function getOptimizedImageUrl(url: string, width: number = 800) {
    if (!url) return '';

    // Cloudflare Image Delivery
    if (url.includes('imagedelivery.net')) {
        // Safe check: many accounts only have 'public' or specific named variants.
        // If we don't know the variants, we should stick to 'public' to avoid 404s.
        const parts = url.split('/');
        if (parts.length > 0 && (parts[parts.length - 1] === 'public' || parts[parts.length - 1].includes('='))) {
            // Only transform if it already has a variant or we want to force public
            parts[parts.length - 1] = 'public';
            return parts.join('/');
        }
    }

    // Unsplash
    if (url.includes('images.unsplash.com')) {
        const _URL = (globalThis as any).URL;
        const urlObj = new _URL(url);
        urlObj.searchParams.set('w', width.toString());
        urlObj.searchParams.set('q', '75');
        urlObj.searchParams.set('auto', 'format');
        return urlObj.toString();
    }

    return url;
}
