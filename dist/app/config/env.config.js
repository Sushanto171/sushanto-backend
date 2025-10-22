"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envVars = exports.loadEnvVars = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const requiredVars = [
    "NODE_ENV",
    "PORT",
    "DATABASE_URL",
    "NAME",
    "EMAIL",
    "PASSWORD",
    "PHONE",
    "BCRYPT_SALT_ROUND",
    "JWT_ACCESS_SECRET",
    "JWT_ACCESS_EXPIRES",
    "JWT_REFRESH_SECRET",
    "JWT_REFRESH_EXPIRES",
    "CLOUDINARY_CLOUD_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",
];
const loadEnvVars = () => {
    requiredVars.forEach((variable) => {
        if (!process.env[variable]) {
            console.warn("Missing env variable", variable);
            throw Error(`Missing env variable: ${variable}`);
        }
    });
    return {
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.PORT,
        NAME: process.env.NAME,
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD,
        PHONE: process.env.PHONE,
        BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND,
        JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
        JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES,
        JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
        JWT_REFRESH_EXPIRES: process.env.JWT_REFRESH_EXPIRES,
        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
        DATABASE_URL: process.env.DATABASE_URL,
    };
};
exports.loadEnvVars = loadEnvVars;
exports.envVars = (0, exports.loadEnvVars)();
