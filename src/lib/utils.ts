import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * Generates an optimized image URL for Cloudflare Image Delivery or Unsplash.
 * Uses Cloudflare flexible variants (w=, quality=) for real width/quality control.
 * @param url The original image URL
 * @param width The desired width in pixels
 * @param quality Image quality 1-100 (default 75)
 */
export function getOptimizedImageUrl(url: string, width: number = 800, quality: number = 75) {
    if (!url) return '';

    // Cloudflare Image Delivery — flexible variants
    if (url.includes('imagedelivery.net')) {
        const parts = url.split('/');
        if (parts.length > 0) {
            // Replace the last segment (named variant) with flexible params
            parts[parts.length - 1] = `w=${width},quality=${quality}`;
            return parts.join('/');
        }
    }

    // Unsplash
    if (url.includes('images.unsplash.com')) {
        try {
            const urlObj = new URL(url);
            urlObj.searchParams.set('w', width.toString());
            urlObj.searchParams.set('q', quality.toString());
            urlObj.searchParams.set('auto', 'format');
            return urlObj.toString();
        } catch (e) {
            // Fallback for relative URLs or invalid URLs
            if (url.includes('?')) {
                return `${url}&w=${width}&q=${quality}&auto=format`;
            }
            return `${url}?w=${width}&q=${quality}&auto=format`;
        }
    }

    return url;
}
