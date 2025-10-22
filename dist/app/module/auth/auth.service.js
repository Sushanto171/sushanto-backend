"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const env_config_1 = require("../../config/env.config");
const appError_1 = require("../../helpers/appError");
const db_1 = require("../../lib/db");
const bcrypt_1 = require("../../utils/bcrypt");
const jwt_1 = require("../../utils/jwt");
const login = async (payload) => {
    if (!payload?.email || !payload?.password) {
        throw new appError_1.AppError(400, "Missing Required Field.");
    }
    const user = await db_1.prisma.user.findUnique({
        where: { email: payload.email },
    });
    if (!user)
        throw new appError_1.AppError(404, "User does not found.");
    if (!(await (0, bcrypt_1.comparePassword)(payload.password, user.password))) {
        throw new appError_1.AppError(400, "Incorrect type Password.");
    }
    else {
        const { password, ...data } = user;
        return {
            ...data,
        };
    }
};
const getAccessToken = async (refreshToken) => {
    if (!refreshToken) {
        throw new appError_1.AppError(401, "Refresh token missing or expired.");
    }
    let payload;
    try {
        payload = (0, jwt_1.decodeToken)(refreshToken, env_config_1.envVars.JWT_REFRESH_SECRET);
    }
    catch (err) {
        throw new appError_1.AppError(403, "Invalid or expired refresh token.");
    }
    const newTokens = (0, jwt_1.generateToken)(payload);
    return newTokens.accessToken;
};
exports.AuthService = {
    login,
    getAccessToken,
};
