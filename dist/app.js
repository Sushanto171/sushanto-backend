"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const globalError_1 = require("./app/middlewares/globalError");
const notFound_1 = require("./app/middlewares/notFound");
const router_1 = require("./app/router");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api/v1", router_1.RootRoute);
app.get("/", (req, res) => {
    res.send("Server is running....");
});
app.use(notFound_1.notFound);
app.use(globalError_1.globalError);
exports.default = app;
