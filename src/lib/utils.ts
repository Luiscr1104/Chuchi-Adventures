import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * Generates an optimized image URL for Cloudflare Image Delivery or Unsplash.
 * @param url The original image URL
 * @param width The desired width for Unsplash
 * @param variant The Cloudflare variant (defaults to 'public')
 */
export function getOptimizedImageUrl(url: string, width: number = 800, variant: string = 'public') {
    if (!url) return '';

    // Cloudflare Image Delivery
    if (url.includes('imagedelivery.net')) {
        const parts = url.split('/');
        if (parts.length > 0) {
            // Replace the variant part (usually the last component)
            parts[parts.length - 1] = variant;
            return parts.join('/');
        }
    }

    // Unsplash
    if (url.includes('images.unsplash.com')) {
        try {
            const urlObj = new URL(url);
            urlObj.searchParams.set('w', width.toString());
            urlObj.searchParams.set('q', '75');
            urlObj.searchParams.set('auto', 'format');
            return urlObj.toString();
        } catch (e) {
            // Fallback for relative URLs or invalid URLs
            if (url.includes('?')) {
                return `${url}&w=${width}&q=75&auto=format`;
            }
            return `${url}?w=${width}&q=75&auto=format`;
        }
    }

    return url;
}
