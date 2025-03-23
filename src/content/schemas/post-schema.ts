import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const postSchema = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "posts",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(), // yyyy-mm-dd
    socialImage: z.object({
      filepathPublic: z.string(),
      alt: z.string(),
    }),
    timeToRead: z.string().optional(),
    tags: z.array(z.string()).min(1).optional(),
  }),
});
