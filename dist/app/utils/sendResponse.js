"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const sendResponse = (res, payload) => {
    const { statusCode, success, message, data } = payload;
    res.status(statusCode).json({
        success,
        message,
        data,
    });
};
exports.sendResponse = sendResponse;
