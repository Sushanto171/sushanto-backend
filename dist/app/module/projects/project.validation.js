"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectZodSchema = exports.createProjectZodSchema = void 0;
const zod_1 = require("zod");
exports.createProjectZodSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(3, "Title must be at least 3 characters long")
        .max(100, "Title must not exceed 100 characters"),
    description: zod_1.z
        .string()
        .min(10, "Description must be at least 10 characters long"),
    thumbnail: zod_1.z
        .string()
        .url("Thumbnail must be a valid URL")
        .min(1, "Thumbnail is required"),
    liveLink: zod_1.z.string().url("Live link must be a valid URL").optional(),
    repoLink: zod_1.z.string().url("Repository link must be a valid URL").optional(),
    features: zod_1.z
        .array(zod_1.z.string().min(3))
        .min(1, "At least one feature is required"),
    tags: zod_1.z.array(zod_1.z.string().min(2)).min(1, "At least one tag is required"),
    challenges: zod_1.z.array(zod_1.z.string().min(3)).optional(),
    learned: zod_1.z.array(zod_1.z.string().min(3)).optional(),
    authorId: zod_1.z.number().int().positive("Author ID must be a positive integer"),
});
exports.updateProjectZodSchema = exports.createProjectZodSchema.partial();
