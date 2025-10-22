"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const blog_service_1 = require("./blog.service");
const createBlog = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await blog_service_1.BlogService.createBlog(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 201,
        message: "Blogs created successfully",
        data: result,
    });
});
const getBlogs = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const limit = req.query?.limit ? Number(req.query?.limit) : 3;
    const page = req.query?.page ? Number(req.query?.page) : 1;
    const result = await blog_service_1.BlogService.getBlogs({ limit, page });
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Blogs retrieved successfully",
        data: result,
    });
});
const getBlogBySlug = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const slug = req.params.slug;
    const result = await blog_service_1.BlogService.getBlogBySlug(slug);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Blog retrieved successfully",
        data: result,
    });
});
const updateBlogById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.query.id;
    const result = await blog_service_1.BlogService.updateBlogById(Number(id), req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "The Blog Updated successfully",
        data: result,
    });
});
const deleteBlogByID = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await blog_service_1.BlogService.deleteBlogByID(Number(req.params.id));
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "The Blog Deleted successfully",
        data: result,
    });
});
exports.BlogController = {
    createBlog,
    getBlogs,
    getBlogBySlug,
    updateBlogById,
    deleteBlogByID,
};
