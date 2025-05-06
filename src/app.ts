import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", router);

// error handling
app.use(globalErrorHandler);



app.get("/", (req: Request, res: Response) => {
  res.send("Bike Servicing Management Server is running");
});


export default app;