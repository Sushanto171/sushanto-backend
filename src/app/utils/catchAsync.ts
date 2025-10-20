import { NextFunction, Request, Response } from "express";

type Fn = (req: Request, res: Response, next: NextFunction) => Promise<void>;

export const catchAsync =
  (fn: Fn) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
