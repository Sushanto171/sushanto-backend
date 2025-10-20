import bcrypt from "bcryptjs";
import { envVars } from "../config/env.config";

export const hashPassword = async (textPassword: string) => {
  return await bcrypt.hash(textPassword, Number(envVars.BCRYPT_SALT_ROUND));
};

export const comparePassword = async (
  plainPassword: string,
  oldPassword: string
) => {
  return await bcrypt.compare(plainPassword, oldPassword);
};
