"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const sendResponse_1 = require("../utils/sendResponse");
const notFound = async (req, res, next) => {
    const path = req.url;
    (0, sendResponse_1.sendResponse)(res, {
        success: false,
        statusCode: 404,
        message: "Route Does not found",
        data: { path },
    });
};
exports.notFound = notFound;
