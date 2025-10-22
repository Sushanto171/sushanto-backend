"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.destroyUpload = void 0;
const multer_1 = __importDefault(require("multer"));
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const cloudinary_1 = __importDefault(require("../lib/cloudinary"));
const extractCloudinaryPublicId_1 = require("../utils/extractCloudinaryPublicId");
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.default,
    params: async (req, file) => ({
        folder: "portfolio",
        format: file.mimetype.split("/")[1],
        public_id: Date.now().toString() + "-" + file.originalname.replace(/\.[^/.]+$/, ""),
    }),
});
const destroyUpload = async (filePath) => {
    if (!filePath)
        return;
    try {
        const publicId = (0, extractCloudinaryPublicId_1.extractPublicId)(filePath);
        if (publicId) {
            await cloudinary_1.default.uploader.destroy(publicId);
            console.log("Uploaded file deleted successfully:", publicId);
        }
    }
    catch (error) {
        console.error("⚠️ Failed to delete file:", error);
    }
};
exports.destroyUpload = destroyUpload;
exports.upload = (0, multer_1.default)({ storage });
