"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = exports.getAccessToken = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const jwt_1 = require("../../utils/jwt");
const sendResponse_1 = require("../../utils/sendResponse");
const setCookie_1 = require("../../utils/setCookie");
const auth_service_1 = require("./auth.service");
const login = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await auth_service_1.AuthService.login(req.body);
    const token = (0, jwt_1.generateToken)(result);
    (0, setCookie_1.setCookie)(token, res);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Your are login successfully",
        statusCode: 200,
        data: result,
    });
});
exports.getAccessToken = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const cookies = req.cookies;
    const refreshToken = cookies?.refreshToken;
    const accessToken = await auth_service_1.AuthService.getAccessToken(refreshToken);
    (0, setCookie_1.setCookie)({ accessToken }, res);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Access token refreshed successfully.",
        statusCode: 200,
        data: {
            accessToken,
            refreshToken,
        },
    });
});
const logout = (0, catchAsync_1.catchAsync)(async (req, res) => {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        message: "Your are logout successfully",
        statusCode: 200,
        data: {},
    });
});
exports.AuthController = {
    login,
    getAccessToken: exports.getAccessToken,
    logout,
};
