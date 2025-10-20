import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();

router.post("/login", AuthController.login);
router.get("/access-token", AuthController.getAccessToken);

export const AuthRoute = router;
