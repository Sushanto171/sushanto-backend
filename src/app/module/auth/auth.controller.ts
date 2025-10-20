import { catchAsync } from "../../utils/catchAsync";
import { generateToken } from "../../utils/jwt";
import { sendResponse } from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const login = catchAsync(async (req, res) => {
  const result = await AuthService.login(req.body);
  const token = generateToken(result);
  sendResponse(res, {
    success: true,
    message: "Your are login successfully",
    statusCode: 200,
    data: {user:result, token},
  });
});

export const AuthController = {
  login,
};
