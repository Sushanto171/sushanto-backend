import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/db";
import { IMeta } from "../../types";

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

const getBlogs = async ({
  limit = 3,
  page = 1,
}: {
  limit?: number;
  page?: number;
}) => {
  const projects = await prisma.blogs.findMany({
    take: limit,
    skip: limit * (page - 1),
    orderBy: { createdAt: "desc" },
  });
  const count = await prisma.blogs.count();
  const meta: IMeta = {
    limit,
    totalPages: Math.ceil(count / limit),
    total: count,
    page,
  };

  return { projects, meta };
};

const getBlogBySlug = async (slug: string) => {
  return await prisma.blogs.findUnique({ where: { slug } });
};

const updateBlogById = async (id: number, payload: Prisma.BlogsCreateInput) => {
  const result = await prisma.blogs.update({ where: { id }, data: payload });
  return result;
};

const deleteBlogByID = async (id: number) => {
  const result = await prisma.blogs.delete({ where: { id } });
  return result 
};

export const BlogService = {
  createBlog,
  getBlogs,
  getBlogBySlug,
  updateBlogById,
  deleteBlogByID,
};
