import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/db";

const createBlog = async (payload: Prisma.BlogsCreateInput) => {
  const baseSlug = payload.title.toLowerCase().split(" ").join("-");
  let slug = baseSlug;
  let counter = 1;
  return prisma.$transaction(async (tx) => {
    while (await tx.blogs.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${counter++}`;
    }
    return await tx.blogs.create({ data: { ...payload, slug } });
  });
};

const getBlogs = async () => {
  return {};
};

const getBlogBySlug = async () => {
  return {};
};

const updateBlogById = async () => {
  return {};
};

const deleteBlogByID = async () => {
  return {};
};

export const BlogService = {
  createBlog,
  getBlogs,
  getBlogBySlug,
  updateBlogById,
  deleteBlogByID,
};
