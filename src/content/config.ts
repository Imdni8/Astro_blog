import { defineCollection, z } from 'astro:content';

const essaysCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        tag: z.enum(['Build', 'Idea', 'Onion'])
    }),
});

export const collections = {
    'essays': essaysCollection,
};