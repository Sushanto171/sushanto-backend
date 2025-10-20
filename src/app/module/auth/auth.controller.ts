import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const login = catchAsync(async (req, res) => {
  const result = await AuthService.login(req.body);
  sendResponse(res, {
    success: true,
    message: "Your are login successfully",
    statusCode: 200,
    data: result,
  });
});

export const AuthController = {
  login,
};
