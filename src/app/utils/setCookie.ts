import { Response } from "express";

export const setCookie = (
  token: {
    accessToken?: string;
    refreshToken?: string;
  },
  res: Response
) => {
  if (token.accessToken) {
    res.cookie("accessToken", token.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
  }
  if (token.refreshToken) {
    res.cookie("refreshToken", token.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
  }
};
