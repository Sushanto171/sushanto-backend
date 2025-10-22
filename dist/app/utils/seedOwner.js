"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedOwner = void 0;
const env_config_1 = require("../config/env.config");
const db_1 = require("../lib/db");
const types_1 = require("../types");
const bcrypt_1 = require("./bcrypt");
const seedOwner = async () => {
    try {
        const password = await (0, bcrypt_1.hashPassword)(env_config_1.envVars.PASSWORD);
        const owner = await db_1.prisma.user.findUnique({
            where: { email: env_config_1.envVars.EMAIL },
        });
        if (!owner) {
            const ownerData = {
                email: env_config_1.envVars.EMAIL,
                name: env_config_1.envVars.NAME,
                password,
                role: types_1.IRole.owner,
                phone: env_config_1.envVars.PHONE,
            };
            const res = await db_1.prisma.user.create({ data: ownerData });
            console.log(res);
        }
        else {
            console.log(`Already ${owner.role}: ${owner.name} exist.`);
        }
    }
    catch (error) {
        console.log("Owner creation Error:", error);
        throw error;
    }
};
exports.seedOwner = seedOwner;
