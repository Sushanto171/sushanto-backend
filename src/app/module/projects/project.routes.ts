import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
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
  validateFormData(createProjectZodSchema),
  ProjectController.createProject
);

router.get("/", ProjectController.getProjects);

router.get("/:id", ProjectController.getProjectById);

router.patch(
  "/:id",
  checkAuth(IRole.owner),
  validateFormData(updateProjectZodSchema),
  ProjectController.updateProjectById
);

router.delete(
  "/:id",
  checkAuth(IRole.owner),
  ProjectController.deleteProjectByID
);

export const ProjectRoutes = router;
