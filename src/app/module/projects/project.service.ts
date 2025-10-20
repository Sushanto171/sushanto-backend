import { Prisma } from "@prisma/client";
import { AppError } from "../../helpers/appError";
import { prisma } from "../../lib/db";

const createProject = async (payload: Prisma.ProjectsCreateInput) => {
  const result = await prisma.projects.create({
    data: { ...payload },
  });
  return result;
};

const getProjects = async () => {
  return await prisma.projects.findMany();
};

const getProjectById = async (id: string) => {
  const project = await prisma.projects.findUnique({
    where: { id: Number(id) },
  });
  if (!project) {
    throw new AppError(404, "Project does not found");
  }
  return project;
};

const updateProjectById = async (
  id: string,
  payload: Prisma.ProjectsUpdateInput
) => {
  return await prisma.projects.update({
    where: { id: Number(id) },
    data: payload,
  });
};

const deleteProjectByID = async (id: string) => {
  return await prisma.projects.delete({ where: { id: Number(id) } });
};

export const ProjectService = {
  createProject,
  getProjects,
  getProjectById,
  updateProjectById,
  deleteProjectByID,
};
