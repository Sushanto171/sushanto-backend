"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const env_config_1 = require("../config/env.config");
const hashPassword = async (textPassword) => {
    return await bcryptjs_1.default.hash(textPassword, Number(env_config_1.envVars.BCRYPT_SALT_ROUND));
};
exports.hashPassword = hashPassword;
const comparePassword = async (plainPassword, oldPassword) => {
    return await bcryptjs_1.default.compare(plainPassword, oldPassword);
};
exports.comparePassword = comparePassword;
