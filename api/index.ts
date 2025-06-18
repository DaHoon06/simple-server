import express, { Request, Response } from "express";
import serverless from "serverless-http";

const app = express();
const router = express.Router();

router.get("/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from TypeScript + Express + Vercel!" });
});

app.use("/api", router);

export default serverless(app);
