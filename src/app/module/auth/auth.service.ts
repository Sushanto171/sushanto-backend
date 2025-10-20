import { Prisma } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";
import { envVars } from "../../config/env.config";
import { AppError } from "../../helpers/appError";
import { prisma } from "../../lib/db";
import { comparePassword } from "../../utils/bcrypt";
import { decodeToken, generateToken } from "../../utils/jwt";

const login = async (payload: Prisma.UserCreateInput) => {
  if (!payload?.email || !payload?.password) {
    throw new AppError(400, "Missing Required Field.");
  }
  const user = await prisma.user.findUnique({
    where: { email: payload.email },
  });
  if (!user) throw new AppError(404, "User does not found.");
  if (!(await comparePassword(payload.password, user.password))) {
    throw new AppError(400, "Incorrect type Password.");
  } else {
    const { password, ...data } = user;
    return {
      ...data,
    };
  }
};

const getAccessToken = async (refreshToken: string) => {
  if (!refreshToken) {
    throw new AppError(401, "Refresh token missing or expired.");
  }
  let payload: JwtPayload;
  try {
    payload = decodeToken(
      refreshToken,
      envVars.JWT_REFRESH_SECRET
    ) as unknown as JwtPayload;
  } catch (err) {
    throw new AppError(403, "Invalid or expired refresh token.");
  }

  const newTokens = generateToken(payload);
  return newTokens.accessToken;
};

export const AuthService = {
  login,
  getAccessToken,
};
