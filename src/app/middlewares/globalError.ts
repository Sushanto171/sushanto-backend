/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { sendResponse } from "../utils/sendResponse";
import { destroyUpload } from "./multer";

export const globalError = async (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await destroyUpload(req.file?.path);
  console.log(error.stack);
  const statusCode = error.statusCode || 500;
  const message = error.message || "Something went wrong";
  sendResponse(res, {
    success: false,
    statusCode,
    message,
    data: "",
  });
};
