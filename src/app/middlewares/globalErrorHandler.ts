import { NextFunction, Request, Response } from "express";
import status from "http-status-codes";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(status.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message || "something went wrong",
  });
};

export default globalErrorHandler;