import { NextFunction, Request, Response } from "express";
import { sendResponse } from "../utils/sendResponse";

export const globalError = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = error.message || "Something went wrong";
  sendResponse(res, {
    success: false,
    statusCode,
    message,
    data: "",
  });
};
