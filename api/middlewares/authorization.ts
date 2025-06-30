import { Request, Response, NextFunction } from "express";

const API_KEY = process.env.API_KEY;

const AuthorizationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const apiKey = req.headers.authorization;
  if (!apiKey || apiKey !== API_KEY) {
    res.status(401).json({ error: "Unauthorized: Invalid API key" });
    return;
  }

  next();
};

export default AuthorizationMiddleware;
