import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { IRole } from "../../types";
import { BlogController } from "./blog.controller";

const router = Router();

router.post("/", checkAuth(IRole.owner), BlogController.createBlog);
router.get("/", BlogController.getBlogs);
router.get("/:slug", BlogController.getBlogBySlug);
router.patch("/:id", checkAuth(IRole.owner), BlogController.updateBlogById);
router.delete("/:id", checkAuth(IRole.owner), BlogController.deleteBlogByID);

export const BlogRoutes = router;
