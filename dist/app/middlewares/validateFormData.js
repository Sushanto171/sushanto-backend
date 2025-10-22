"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFormData = void 0;
const validateFormData = (schema, fieldName) => (req, res, next) => {
    let data;
    if (fieldName) {
        data = JSON.parse(req.body?.data);
        data[fieldName] = req?.file?.path || "";
    }
    const result = schema.safeParse(data || req.body);
    if (!result.success) {
        throw result.error;
    }
    else {
        req.body = result.data;
        next();
    }
};
exports.validateFormData = validateFormData;
