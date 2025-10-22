"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const env_config_1 = require("../config/env.config");
const appError_1 = require("../helpers/appError");
const db_1 = require("../lib/db");
const types_1 = require("../types");
const jwt_1 = require("../utils/jwt");
const checkAuth = (...role) => async (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        const userInfo = (0, jwt_1.decodeToken)(token, env_config_1.envVars.JWT_ACCESS_SECRET);
        const user = await db_1.prisma.user.findUnique({
            where: { email: userInfo.email },
        });
        if (!user) {
            throw new appError_1.AppError(404, "User does not exist.");
        }
        if (!role.includes(user.role)) {
            throw new appError_1.AppError(401, "You are not permitted for this action");
        }
        req.user = {
            id: user.id,
            email: user.email,
            role: user.role,
            phone: user.phone,
        };
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.checkAuth = checkAuth;
(0, exports.checkAuth)(types_1.IRole.owner, types_1.IRole.visitor);
