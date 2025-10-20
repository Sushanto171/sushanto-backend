import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { envVars } from "../config/env.config";
import { AppError } from "../helpers/appError";

export const generateToken = (
  info: Pick<User, "email" | "name" | "phone" | "role">
) => {
  const payload = {
    email: info.email,
    name: info.name,
    role: info.role,
    phone: info.phone,
  };
  return jwt.sign(payload, envVars.JWT_SECRET, {
    expiresIn: 60 * 60 * 24,
  });
};

export const decodeToken = (token: string) => {
  if (!token) throw new AppError(404, "missing token");
  return jwt.verify(token, envVars.JWT_SECRET, (error, decoded) => {
    if (error) {
      throw new AppError(401, "invalid token");
    }
    return decoded;
  });
};
