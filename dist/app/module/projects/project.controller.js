"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const project_service_1 = require("./project.service");
const createProject = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await project_service_1.ProjectService.createProject(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 201,
        message: "Project created successfully.",
        data: result,
    });
});
const getProjects = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const limit = req.query?.limit ? Number(req.query?.limit) : 3;
    const page = req.query?.page ? Number(req.query?.page) : 1;
    const result = await project_service_1.ProjectService.getProjects({ limit, page });
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Retrieved all projects successfully.",
        data: result,
    });
});
const getProjectById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const id = req.params.id;
    const result = await project_service_1.ProjectService.getProjectById(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Retrieved the project successfully.",
        data: result,
    });
});
const updateProjectById = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await project_service_1.ProjectService.updateProjectById(req.params.id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Project updated successfully.",
        data: result,
    });
});
const deleteProjectByID = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await project_service_1.ProjectService.deleteProjectByID(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Deleted successfully.",
        data: result,
    });
});
exports.ProjectController = {
    createProject,
    getProjects,
    getProjectById,
    updateProjectById,
    deleteProjectByID,
};
