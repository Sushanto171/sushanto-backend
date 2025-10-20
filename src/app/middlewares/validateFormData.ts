import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export const validateFormData =
  (schema: ZodSchema, fieldName: "thumbnail"|"any") => (req: Request, res: Response, next: NextFunction) => {
    const data = JSON.parse(req.body?.data);
    data[fieldName] = req?.file?.path || "";
    const result = schema.safeParse(data);
    if (!result.success) {
      throw result.error;
    } else {
      req.body = result.data;
      next();
    }
  };
