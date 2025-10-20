import jwt, { JwtPayload } from "jsonwebtoken";
import { envVars } from "../config/env.config";
import { AppError } from "../helpers/appError";

export const generateToken = (info: JwtPayload) => {
  const payload = {
    email: info.email,
    name: info.name,
    role: info.role,
    phone: info.phone,
  };
  const accessToken = jwt.sign(payload, envVars.JWT_ACCESS_SECRET, {
    expiresIn: 60 * 60 * 24,
  });
  const refreshToken = jwt.sign(payload, envVars.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });
  return { accessToken, refreshToken };
};

export const decodeToken = (token: string, secret: string) => {
  if (!token) throw new AppError(404, "missing token");

  return jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      console.log(error);
      throw new AppError(401, "invalid token");
    }
    return decoded;
  });
};
