import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { IRole } from "../../types";
import { ProjectController } from "./project.controller";

const router = Router();
router.post("/", checkAuth(IRole.owner), ProjectController.createProject);
router.get("/", ProjectController.getProjects);
router.get("/:id", ProjectController.getProjectById);
router.patch(
  "/:id",
  checkAuth(IRole.owner),
  ProjectController.updateProjectById
);
router.delete(
  "/:id",
  checkAuth(IRole.owner),
  ProjectController.deleteProjectByID
);

export const ProjectRoutes = router;
