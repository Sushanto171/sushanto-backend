import { Router } from "express";
import { AuthRoute } from "../module/auth/auth.routes";
import { IRouter } from "../types";

const router = Router();

const Routes: IRouter[] = [
  {
    url: "/auth",
    path: AuthRoute,
  },
];

Routes.forEach((route) => router.use(route.url, route.path));

export const RootRoute = router;
