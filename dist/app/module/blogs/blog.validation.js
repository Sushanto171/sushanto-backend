"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogZodSchema = exports.createBlogZodSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createBlogZodSchema = zod_1.default.object({
    title: zod_1.default
        .string()
        .trim()
        .min(3, "Title must be at least 3 characters long")
        .max(100, "Title must not exceed 100 characters"),
    content: zod_1.default.string().min(10, "Content must be at least 10 characters long"),
    authorId: zod_1.default.number().int().positive("author ID must be a positive integer"),
    thumbnail: zod_1.default
        .string()
        .url("Thumbnail must be a valid URL")
        .min(1, "Thumbnail is required"),
    images: zod_1.default
        .array(zod_1.default
        .string()
        .url("Content Image must be a valid URL")
        .min(1, "Content Image is required"))
        .optional(),
    tags: zod_1.default.array(zod_1.default.string().min(2)).min(1, "At least one tag is required"),
});
exports.updateBlogZodSchema = exports.createBlogZodSchema.partial();
