import { Router } from "express";
import { AuthRoute } from "../module/auth/auth.routes";
import { ProjectRoutes } from "../module/projects/project.routes";
import { IRouter } from "../types";
import { BlogRoutes } from "../module/blogs/blog.routes";

const router = Router();

const Routes: IRouter[] = [
  {
    url: "/auth",
    path: AuthRoute,
  },
  {
    url: "/projects",
    path: ProjectRoutes,
  },
  {
    url: "/blogs",
    path: BlogRoutes
  }
];

Routes.forEach((route) => router.use(route.url, route.path));

export const RootRoute = router;
