import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        updatedDate: z.date().optional(),
        image: z.string(),
        author: z.string().default('Luis'),
        tags: z.array(z.string()).default(['La Fortuna', 'Tours']),
        isDraft: z.boolean().default(false),
        featured: z.boolean().default(false),
    }),
});

export const collections = { blog };
