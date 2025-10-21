import { envVars } from "../config/env.config";
import { prisma } from "../lib/db";
import { IRole } from "../types";
import { hashPassword } from "./bcrypt";

export const seedOwner = async () => {
  try {
    const password = await hashPassword(envVars.PASSWORD);
    const owner = await prisma.user.findUnique({
      where: { email: envVars.EMAIL },
    });
   
    if (!owner) {
      const ownerData = {
        email: envVars.EMAIL,
        name: envVars.NAME,
        password,
        role: IRole.owner,
        phone: envVars.PHONE,
      };
      const res = await prisma.user.create({ data: ownerData });
      console.log(res);
    } else {
      console.log(`Already ${owner.role}: ${owner.name} exist.`);
    }
  } catch (error) {
    console.log("Owner creation Error:", error);
    throw error
  }
};
