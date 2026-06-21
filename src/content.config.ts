import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Astro 5 content collection using the glob loader.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { blog };
