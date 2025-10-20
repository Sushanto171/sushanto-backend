import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ProjectService } from "./project.service";

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectService.createProject(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Project created successfully.",
    data: result,
  });
});

const getProjects = catchAsync(async (req, res) => {
  const limit = req.query?.limit ? Number(req.query?.limit) : 3;
  const page = req.query?.page ? Number(req.query?.page) : 1;
  const result = await ProjectService.getProjects({ limit, page });
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Retrieved all projects successfully.",
    data: result,
  });
});

const getProjectById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ProjectService.getProjectById(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Retrieved the project successfully.",
    data: result,
  });
});

const updateProjectById = catchAsync(async (req, res) => {
  const result = await ProjectService.updateProjectById(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Project updated successfully.",
    data: result,
  });
});

const deleteProjectByID = catchAsync(async (req, res) => {
  const result = await ProjectService.deleteProjectByID(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Deleted successfully.",
    data: result,
  });
});

export const ProjectController = {
  createProject,
  getProjects,
  getProjectById,
  updateProjectById,
  deleteProjectByID,
};
