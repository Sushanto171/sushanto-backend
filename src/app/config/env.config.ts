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
}

const requiredVars = [
  "NODE_ENV",
  "PORT",
  "DATABASE_URL",
  "NAME",
  "EMAIL",
  "PASSWORD",
  "PHONE",
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
  };
};

export const envVars = loadEnvVars();
