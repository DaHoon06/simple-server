import express, { Request, Response } from "express";
import cors from "cors";
import { AuthorizationMiddleware } from "./middlewares";
import { CORS_OPTIONS, EndPointType } from "./config";
import { Routes } from "./route";
import { supabaseClient } from "./database/client";
import { SystemRepository } from "./module/system/system.repository";

const app = express();

app.use(cors(CORS_OPTIONS));
app.use(express.static("public"));

app.get("/", AuthorizationMiddleware, function (req: Request, res: Response) {
  const apiEndpoint = req.query["api-endpoint"] as EndPointType;
  const data = Routes(apiEndpoint);
  res.json(data);
});

app.get("/health-check", async (req: Request, res: Response) => {
  const systemRepository = new SystemRepository(supabaseClient);
  const timestamp = await systemRepository.updateSystemDate();
  res.json({ message: `System date updated: ${timestamp}` });
});

/**
 * User API
 */
app.get("/users", function (req: Request, res: Response) {
  res.json({ message: "hello world users" });
});

app.listen(3030, () => console.log("Server ready on port 3030."));

module.exports = app;
