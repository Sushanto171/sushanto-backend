import { Prisma } from "@prisma/client";
import { AppError } from "../../helpers/appError";
import { prisma } from "../../lib/db";
import { comparePassword } from "../../utils/bcrypt";

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

export const AuthService = {
  login,
};
