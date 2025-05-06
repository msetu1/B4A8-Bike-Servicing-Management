import status from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BikeServices } from "./bike.service";

const createBike = catchAsync(async (req, res) => {
  const result = await BikeServices.createBike(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Bike added successfully!",
    data: result,
  });
});

const getAllBike = catchAsync(async (req, res) => {
  const result = await BikeServices.getAllBike();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Bikes fetched successfully!",
    data: result,
  });
});

const getBikeById = catchAsync(async (req, res) => {
  const result = await BikeServices.getBikeById(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Bike fetched successfully!",
    data: result,
  });
});

export const BikeController = {
  createBike,
  getAllBike,
  getBikeById,
};
