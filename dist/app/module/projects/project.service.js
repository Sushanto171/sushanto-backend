"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const appError_1 = require("../../helpers/appError");
const db_1 = require("../../lib/db");
const createProject = async (payload) => {
    const result = await db_1.prisma.projects.create({
        data: { ...payload },
    });
    return result;
};
const getProjects = async ({ limit = 3, page = 1, }) => {
    const projects = await db_1.prisma.projects.findMany({
        take: limit,
        skip: limit * (page - 1),
        orderBy: { createdAt: "desc" },
    });
    const count = await db_1.prisma.projects.count();
    const meta = {
        limit,
        totalPages: Math.ceil(count / limit),
        total: count,
        page,
    };
    return { projects, meta };
};
const getProjectById = async (id) => {
    const project = await db_1.prisma.projects.findUnique({
        where: { id: Number(id) },
    });
    if (!project) {
        throw new appError_1.AppError(404, "Project does not found");
    }
    return project;
};
const updateProjectById = async (id, payload) => {
    return await db_1.prisma.projects.update({
        where: { id: Number(id) },
        data: payload,
    });
};
const deleteProjectByID = async (id) => {
    return await db_1.prisma.projects.delete({ where: { id: Number(id) } });
};
exports.ProjectService = {
    createProject,
    getProjects,
    getProjectById,
    updateProjectById,
    deleteProjectByID,
};
