import express, { Request, Response } from "express";
import cors from "cors";
import { AuthorizationMiddleware } from "./middlewares";
import { CORS_OPTIONS, EndPointType } from "./config";
import { Routes } from "./route";

const app = express();

app.use(cors(CORS_OPTIONS));
app.use(express.static("public"));

app.get("/", AuthorizationMiddleware, function (req: Request, res: Response) {
  const apiEndpoint = req.query["api-endpoint"] as EndPointType;
  const data = Routes(apiEndpoint);
  res.json(data);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
