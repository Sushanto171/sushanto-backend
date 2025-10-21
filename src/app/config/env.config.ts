import dotenv from "dotenv";
dotenv.config();

interface EnvVar {
  NODE_ENV: "production" | "development";
  PORT: string;
  DATABASE_URL?: string;
  NAME: string;
  EMAIL: string;
  PASSWORD: string;
  PHONE: string;
  BCRYPT_SALT_ROUND: string;
  JWT_ACCESS_SECRET: string;
  JWT_ACCESS_EXPIRES: string;
  JWT_REFRESH_SECRET: string;
  JWT_REFRESH_EXPIRES: string;
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_API_KEY: string;
  CLOUDINARY_API_SECRET: string;
}

const requiredVars = [
  "NODE_ENV",
  "PORT",
  "DATABASE_URL",
  "NAME",
  "EMAIL",
  "PASSWORD",
  "PHONE",
  "BCRYPT_SALT_ROUND",
  "JWT_ACCESS_SECRET",
  "JWT_ACCESS_EXPIRES",
  "JWT_REFRESH_SECRET",
  "JWT_REFRESH_EXPIRES",
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
];

export const loadEnvVars = (): EnvVar => {
  requiredVars.forEach((variable) => {
    if (!process.env[variable]) {
      console.warn("Missing env variable", variable);

      throw Error(`Missing env variable: ${variable}`);
    }
  });
  return {
    NODE_ENV: process.env.NODE_ENV as "production" | "development",
    PORT: process.env.PORT as string,
    NAME: process.env.NAME as string,
    EMAIL: process.env.EMAIL as string,
    PASSWORD: process.env.PASSWORD as string,
    PHONE: process.env.PHONE as string,
    BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND as string,
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET as string,
    JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES as string,
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET as string,
    JWT_REFRESH_EXPIRES: process.env.JWT_REFRESH_EXPIRES as string,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME as string,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY as string,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET as string,
    DATABASE_URL: process.env.DATABASE_URL as string,
  };
};

export const envVars = loadEnvVars();
