import express, { Request, Response } from "express";

const app = express();

app.use(express.static("public"));

app.get("/hello", function (req: Request, res: Response) {
  res.json({ message: "Hello, TypeScript!" });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
