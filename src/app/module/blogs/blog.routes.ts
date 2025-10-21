import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { upload } from "../../middlewares/multer";
import { validateFormData } from "../../middlewares/validateFormData";
import { IRole } from "../../types";
import { BlogController } from "./blog.controller";
import { createBlogZodSchema } from "./blog.validation";

const router = Router();

router.post(
  "/",
  checkAuth(IRole.owner),
  upload.single("thumbnail"),
  validateFormData(createBlogZodSchema,"thumbnail"),
  BlogController.createBlog
);
router.get("/", BlogController.getBlogs);
router.get("/:slug", BlogController.getBlogBySlug);
router.patch("/:id", checkAuth(IRole.owner), BlogController.updateBlogById);
router.delete("/:id", checkAuth(IRole.owner), BlogController.deleteBlogByID);

export const BlogRoutes = router;
