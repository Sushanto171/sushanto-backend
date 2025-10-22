"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const env_config_1 = require("./app/config/env.config");
const db_1 = require("./app/lib/db");
const seedOwner_1 = require("./app/utils/seedOwner");
let server;
const startServer = async () => {
    try {
        await (0, db_1.connectDB)();
        await (0, seedOwner_1.seedOwner)();
        server = http_1.default.createServer(app_1.default);
        server.listen(env_config_1.envVars.PORT, () => {
            console.log(`⚡ Server running on: http://localhost:${env_config_1.envVars.PORT}`);
        });
        handleProcessEvent();
    }
    catch (error) {
        console.log(`❌ Error during server startup: ${error}`);
        process.exit(1);
    }
};
const gracefulShutdown = async (signal) => {
    console.log(`🔄️ Received ${signal}, shuting down gracefully...`);
    if (server) {
        server.close(async () => {
            console.log("✅ HTTP server closed.");
            try {
                console.log("Sever shutdown completed");
            }
            catch (error) {
                console.log(`Error during shutdown: ${error}`);
            }
            process.exit(0);
        });
    }
    else {
        process.exit(0);
    }
};
const handleProcessEvent = () => {
    process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
    process.on("SIGINT", () => gracefulShutdown("SIGINT"));
    process.on("uncaughtException", (error) => {
        console.log("uncaughtException:", error);
        gracefulShutdown("uncaughtException");
    });
    process.on("unhandledRejection", (reason) => {
        console.log("unhandledRejection: ", reason);
        gracefulShutdown("unhandledRejection");
    });
};
startServer();
