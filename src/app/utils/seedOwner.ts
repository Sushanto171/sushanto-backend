import { envVars } from "../config/env.config";
import { prisma } from "../lib/db";
import { IRole } from "../types";

export const seedOwner = async () => {
  try {
    const owner = await prisma.user.findUnique({
      where: { email: envVars.EMAIL },
    });
console.log(owner);
    if (!owner) {
      const ownerData = {
        email: envVars.EMAIL,
        name: envVars.NAME,
        password: envVars.PASSWORD,
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
  }
};
