import { catchAsync } from "../../utils/catchAsync";
import { generateToken } from "../../utils/jwt";
import { sendResponse } from "../../utils/sendResponse";
import { setCookie } from "../../utils/setCookie";
import { AuthService } from "./auth.service";

const login = catchAsync(async (req, res) => {
  const result = await AuthService.login(req.body);
  const token = generateToken(result);
  setCookie(token, res);
  sendResponse(res, {
    success: true,
    message: "Your are login successfully",
    statusCode: 200,
    data: result,
  });
});

export const getAccessToken = catchAsync(async (req, res) => {
  const cookies = req.cookies as { refreshToken?: string };
  const refreshToken = cookies?.refreshToken;
  const accessToken = await AuthService.getAccessToken(refreshToken as string);
  setCookie({ accessToken }, res);
  sendResponse(res, {
    success: true,
    message: "Access token refreshed successfully.",
    statusCode: 200,
    data: {
      accessToken,
      refreshToken,
    },
  });
});

export const AuthController = {
  login,
  getAccessToken,
};
