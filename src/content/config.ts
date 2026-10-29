import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string().min(1),
		published: z.union([z.date(), z.string().min(1)]).pipe(z.coerce.date()),
		updated: z
			.union([z.date(), z.string().min(1)])
			.pipe(z.coerce.date())
			.optional(),
		draft: z.boolean().optional().default(false),
		description: z
			.string()
			.nullish()
			.transform((value) => value ?? ""),
		image: z
			.string()
			.nullish()
			.transform((value) => value ?? ""),
		tags: z
			.array(z.string())
			.nullish()
			.transform((value) => value ?? []),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});
export const collections = {
	posts: postsCollection,
};
