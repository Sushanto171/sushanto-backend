/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { sendResponse } from "../utils/sendResponse";

export const notFound = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const path = req.url;
  sendResponse(res, {
    success: false,
    statusCode: 404,
    message: "Route Does not found",
    data: {path},
  });
};
