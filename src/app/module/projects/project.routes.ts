import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { upload } from "../../middlewares/multer";
import { validateFormData } from "../../middlewares/validateFormData";
import { IRole } from "../../types";
import { ProjectController } from "./project.controller";
import {
  createProjectZodSchema,
  updateProjectZodSchema,
} from "./project.validation";

const router = Router();
router.post(
  "/",
  checkAuth(IRole.owner),
  upload.single("thumbnail"),
  validateFormData(createProjectZodSchema, "thumbnail"),
  ProjectController.createProject
);

router.get("/", ProjectController.getProjects);

router.get("/:id", ProjectController.getProjectById);

router.patch(
  "/:id",
  checkAuth(IRole.owner),
  validateFormData(updateProjectZodSchema, "thumbnail"),
  ProjectController.updateProjectById
);

router.delete(
  "/:id",
  checkAuth(IRole.owner),
  ProjectController.deleteProjectByID
);

export const ProjectRoutes = router;
