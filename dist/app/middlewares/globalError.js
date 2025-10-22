"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalError = void 0;
const sendResponse_1 = require("../utils/sendResponse");
const multer_1 = require("./multer");
const globalError = async (error, req, res, next) => {
    await (0, multer_1.destroyUpload)(req.file?.path);
    console.log(error.stack);
    const statusCode = error.statusCode || 500;
    const message = error.message || "Something went wrong";
    (0, sendResponse_1.sendResponse)(res, {
        success: false,
        statusCode,
        message,
        data: "",
    });
};
exports.globalError = globalError;
