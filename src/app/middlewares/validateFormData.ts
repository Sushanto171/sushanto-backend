import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export const validateFormData =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      throw result.error;
    } else {
      result.data;
      next();
    }
  };
