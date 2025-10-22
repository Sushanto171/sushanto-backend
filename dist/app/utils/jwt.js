"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_config_1 = require("../config/env.config");
const appError_1 = require("../helpers/appError");
const generateToken = (info) => {
    const payload = {
        email: info.email,
        name: info.name,
        role: info.role,
        phone: info.phone,
    };
    const accessToken = jsonwebtoken_1.default.sign(payload, env_config_1.envVars.JWT_ACCESS_SECRET, {
        expiresIn: 60 * 60 * 24,
    });
    const refreshToken = jsonwebtoken_1.default.sign(payload, env_config_1.envVars.JWT_REFRESH_SECRET, {
        expiresIn: "7d",
    });
    return { accessToken, refreshToken };
};
exports.generateToken = generateToken;
const decodeToken = (token, secret) => {
    if (!token)
        throw new appError_1.AppError(404, "missing token");
    return jsonwebtoken_1.default.verify(token, secret, (error, decoded) => {
        if (error) {
            console.log(error);
            throw new appError_1.AppError(401, "invalid token");
        }
        return decoded;
    });
};
exports.decodeToken = decodeToken;
