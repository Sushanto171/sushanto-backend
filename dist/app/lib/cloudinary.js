"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const env_config_1 = require("../config/env.config");
cloudinary_1.v2.config({
    cloud_name: env_config_1.envVars.CLOUDINARY_CLOUD_NAME,
    api_key: env_config_1.envVars.CLOUDINARY_API_KEY,
    api_secret: env_config_1.envVars.CLOUDINARY_API_SECRET,
});
exports.default = cloudinary_1.v2;
