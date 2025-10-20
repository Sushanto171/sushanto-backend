import dotenv from "dotenv";
dotenv.config();

interface EnvVar {
  NODE_ENV: "production" | "development";
  PORT: string;
}

const requiredVars = ["NODE_ENV", "PORT"];

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
  };
};

export const envVars = loadEnvVars();
