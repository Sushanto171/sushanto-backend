import { z } from "zod";

export const createProjectZodSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(100, "Title must not exceed 100 characters"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),

  thumbnail: z
    .string()
    .url("Thumbnail must be a valid URL")
    .min(1, "Thumbnail is required"),

  liveLink: z.string().url("Live link must be a valid URL").optional(),

  repoLink: z.string().url("Repository link must be a valid URL").optional(),

  features: z
    .array(z.string().min(3))
    .min(1, "At least one feature is required"),

  tags: z.array(z.string().min(2)).min(1, "At least one tag is required"),

  challenges: z.array(z.string().min(3)).optional(),

  learned: z.array(z.string().min(3)).optional(),

  authorId: z.number().int().positive("Author ID must be a positive integer"),
});

export const updateProjectZodSchema = createProjectZodSchema.partial();
