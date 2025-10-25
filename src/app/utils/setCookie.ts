import { CookieOptions, Response } from "express";

const options: CookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
};

export const setCookie = (
  token: {
    accessToken?: string;
    refreshToken?: string;
  },
  res: Response
) => {
  if (token.accessToken) {
    res.cookie("accessToken", token.accessToken, options);
  }
  if (token.refreshToken) {
    res.cookie("refreshToken", token.refreshToken, options);
  }
};
