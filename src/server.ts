import http, { Server } from "http";
import app from "./app";

let server: Server;

const startServer = async () => {
  try {
    server = http.createServer(app);
    server.listen(5000, () => {
      console.log(`⚡ Server running on: http://localhost:5000`);
    });
    handleProcessEvent();
  } catch (error) {
    console.log(`❌ Error during server startup: ${error}`);
    process.exit(1);
  }
};

const gracefulShutdown = async (signal: string): Promise<void> => {
  console.log(`🔄️ Received ${signal}, shuting down gracefully...`);
  if (server) {
    server.close(async () => {
      console.log("✅ HTTP server closed.");
      try {
        console.log("Sever shutdown completed");
      } catch (error) {
        console.log(`Error during shutdown: ${error}`);
      }

      process.exit(0);
    });
  } else {
    process.exit(0);
  }
};

const handleProcessEvent = () => {
  process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
  process.on("SIGINT", () => gracefulShutdown("SIGINT"));

  process.on("uncaughtException", (error) => {
    console.log("uncaughtException:", error);
    gracefulShutdown("uncaughtException");
  });
  process.on("unhandledRejection", (reason) => {
    console.log("unhandledRejection: ", reason);
    gracefulShutdown("unhandledRejection");
  });
};

startServer();
