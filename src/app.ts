import cookieParser from "cookie-parser";
import cors from "cors";
import express, {
  type Application,
  type Request,
  type Response,
} from "express";

const app: Application = express();

app.use(cors());
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running....");
});

export default app;
