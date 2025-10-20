import { Response } from "express";
import { IResponse } from "../types";

export const sendResponse = <T>(res: Response, payload: IResponse<T>) => {
  const { statusCode, success, message, data } = payload;
  res.status(statusCode).json({
    success,
    message,
    data,
  });
};
