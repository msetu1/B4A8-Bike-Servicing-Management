import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import status from "http-status-codes";

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

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(status.NOT_FOUND).json({
      success: false,
      message: "API NOT FOUND",
      error: {
        path: req.originalUrl,
        message: "Your requested path is not found",
      },
    });
  });

export default app;