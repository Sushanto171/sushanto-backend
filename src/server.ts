import app from "./app";

const startServer = async () => {
  app.listen(5000, () => {
    console.log(`⚡ Server running on: http://localhost:5000`);
  });
};

startServer();
