import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { BlogService } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogService.createBlog(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "operation successfully",
    data: result,
  });
});

const getBlogs = catchAsync(async (req, res) => {
  const limit = req.query?.limit ? Number(req.query?.limit) : 3;
  const page = req.query?.page ? Number(req.query?.page) : 1;
  const result = await BlogService.getBlogs({ limit, page });
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "operation successfully",
    data: result,
  });
});

const getBlogBySlug = catchAsync(async (req, res) => {
  const slug = req.params.slug;
  const result = await BlogService.getBlogBySlug(slug);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "operation successfully",
    data: result,
  });
});

const updateBlogById = catchAsync(async (req, res) => {
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "operation successfully",
    data: "",
  });
});

const deleteBlogByID = catchAsync(async (req, res) => {
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "operation successfully",
    data: "",
  });
});

export const BlogController = {
  createBlog,
  getBlogs,
  getBlogBySlug,
  updateBlogById,
  deleteBlogByID,
};
