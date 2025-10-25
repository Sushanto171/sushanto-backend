import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { IRole } from "../../types";
import { AuthController } from "./auth.controller";

const router = Router();

router.post("/login", AuthController.login);
router.get("/access-token", AuthController.getAccessToken);
router.post("/logout", AuthController.logout);
router.get("/me", checkAuth(IRole.owner), AuthController.getMe);

export const AuthRoute = router;
