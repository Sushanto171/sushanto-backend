import { Prisma } from "@prisma/client";
import { AppError } from "../../helpers/appError";
import { prisma } from "../../lib/db";
import { IMeta } from "../../types";

const createProject = async (payload: Prisma.ProjectsCreateInput) => {
  const result = await prisma.projects.create({
    data: { ...payload },
  });
  return result;
};

const getProjects = async ({
  limit = 3,
  page = 1,
}: {
  limit?: number;
  page?: number;
}) => {
  const projects = await prisma.projects.findMany({
    take: limit,
    skip: limit * (page - 1),
  });
  const count = await prisma.projects.count();
  const meta: IMeta = {
    limit,
    totalPages: Math.ceil(count / limit),
    total: count,
    page,
  };

  return { projects, meta };
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
