import cookieParser from "cookie-parser";
import cors from "cors";
import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { globalError } from "./app/middlewares/globalError";
import { notFound } from "./app/middlewares/notFound";
import { RootRoute } from "./app/router";

const app: Application = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1", RootRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running....");
});

app.use(notFound);

app.use(globalError);

export default app;
