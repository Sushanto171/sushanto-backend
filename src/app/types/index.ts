import { Router } from "express";

export interface IMeta {
  page?: number;
  totalPage?: number;
  currentPage?: number;
  total?: number;
}
export interface IResponse<T> {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
  meta?: IMeta;
}

export enum IRole {
  owner = "OWNER",
  visitor = "VISITOR",
}

export interface IRouter {
  url: string;
  path: Router;
}

export interface IProject {
  title: string
  description: string
  thumbnail: string
  liveLink?: string
  repoLink?: string
  features: string[]
  tags: string[]
  challenges?: string[]
  learned?: string[]
}
