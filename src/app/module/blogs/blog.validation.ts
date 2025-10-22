import z from "zod";
export const createBlogZodSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters long")
    .max(100, "Title must not exceed 100 characters"),

  content: z.string().min(10, "Content must be at least 10 characters long"),

  authorId: z.number().int().positive("author ID must be a positive integer"),

  thumbnail: z
    .string()
    .url("Thumbnail must be a valid URL")
    .min(1, "Thumbnail is required"),

  images: z
    .array(
      z
        .string()
        .url("Content Image must be a valid URL")
        .min(1, "Content Image is required")
    )
    .optional(),

  tags: z.array(z.string().min(2)).min(1, "At least one tag is required"),
});

export const updateBlogZodSchema = createBlogZodSchema.partial();
