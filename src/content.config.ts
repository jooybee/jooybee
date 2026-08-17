import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("JOOYBEE"),
    category: z.string().default("Essay"),
    tags: z.array(z.string()).default([]),
    /** Optional cover image path under /public or remote URL */
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
