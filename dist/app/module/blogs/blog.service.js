"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const db_1 = require("../../lib/db");
const createBlog = async (payload) => {
    const baseSlug = payload.title.toLowerCase().split(" ").join("-");
    let slug = baseSlug;
    let counter = 1;
    return db_1.prisma.$transaction(async (tx) => {
        while (await tx.blogs.findUnique({ where: { slug } })) {
            slug = `${baseSlug}-${counter++}`;
        }
        return await tx.blogs.create({ data: { ...payload, slug } });
    });
};
const getBlogs = async ({ limit = 3, page = 1, }) => {
    const projects = await db_1.prisma.blogs.findMany({
        take: limit,
        skip: limit * (page - 1),
        orderBy: { createdAt: "desc" },
    });
    const count = await db_1.prisma.blogs.count();
    const meta = {
        limit,
        totalPages: Math.ceil(count / limit),
        total: count,
        page,
    };
    return { projects, meta };
};
const getBlogBySlug = async (slug) => {
    return await db_1.prisma.blogs.findUnique({ where: { slug } });
};
const updateBlogById = async (id, payload) => {
    const result = await db_1.prisma.blogs.update({ where: { id }, data: payload });
    return result;
};
const deleteBlogByID = async (id) => {
    const result = await db_1.prisma.blogs.delete({ where: { id } });
    return result;
};
exports.BlogService = {
    createBlog,
    getBlogs,
    getBlogBySlug,
    updateBlogById,
    deleteBlogByID,
};
