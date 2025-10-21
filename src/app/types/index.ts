import { Router } from "express";

export interface IMeta {
  page?: number;
  totalPages?: number;
  limit?: number;
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
  id?: number;
  title: string;
  description: string;
  thumbnail: string;
  liveLink?: string;
  repoLink?: string;
  features: string[];
  tags: string[];
  challenges?: string[];
  learned?: string[];
}

export interface IBlog {
  id?: number;
  title: string;
  slug: string;
  content: string;
  author: string;
  thumbnail?: string;
  images?: string[];
  tags?: string[];
  createdAt: string;
  updatedAt?: string;
}
