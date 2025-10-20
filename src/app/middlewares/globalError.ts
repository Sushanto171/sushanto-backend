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
  let statusCode = error.statusCode || 500;
  let message = error.message || "Something went wrong";
  sendResponse(res, {
    success: false,
    statusCode,
    message,
    data: "",
  });
};
