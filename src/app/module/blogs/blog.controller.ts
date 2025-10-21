import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createBlog = catchAsync(async (req, res) => {
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "operation successfully",
    data: "",
  });
});

const getBlogs = catchAsync(async (req, res) => {
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "operation successfully",
    data: "",
  });
});

const getBlogBySlug = catchAsync(async (req, res) => {
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "operation successfully",
    data: "",
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
