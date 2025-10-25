import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { envVars } from "../config/env.config";
import { AppError } from "../helpers/appError";
import { prisma } from "../lib/db";
import { IRole } from "../types";
import { decodeToken } from "../utils/jwt";

export const checkAuth =
  (...role: IRole[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.cookies.accessToken;
      const userInfo = decodeToken(
        token,
        envVars.JWT_ACCESS_SECRET
      ) as unknown as JwtPayload;

      const user = await prisma.user.findUnique({
        where: { email: userInfo.email },
      });

      if (!user) {
        throw new AppError(404, "User does not exist.");
      }
      if (!role.includes(user.role as IRole)) {
        throw new AppError(401, "You are not permitted for this action");
      }
      req.user = {
        id: user.id,
        email: user.email,
        role: user.role,
        phone: user.phone,
      };
      next();
    } catch (error) {
      next(error);
    }
  };


