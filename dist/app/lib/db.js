"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.prisma = void 0;
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient();
const connectDB = async () => {
    try {
        await exports.prisma.$connect();
        console.log("Database connected successfully!");
    }
    catch (error) {
        console.log("Database Connection Failed", error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
