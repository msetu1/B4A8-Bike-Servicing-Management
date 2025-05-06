import status from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ServiceDataService } from "./service.service";

const createService = catchAsync(async (req, res) => {
  const result = await ServiceDataService.createService(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

const getAllService = catchAsync(async (req, res) => {
  const result = await ServiceDataService.getAllService();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});

const getServiceById = catchAsync(async (req, res) => {
  const result = await ServiceDataService.getServiceById(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});

const updateServiceById = catchAsync(async (req, res) => {
  const result = await ServiceDataService.updateServiceById(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});
const fetchOverdueOrPendingServices = catchAsync(async (req, res) => {
  const result = await ServiceDataService.fetchOverdueOrPendingServices();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Overdue or pending services fetched successfully",
    data: result,
  });
});

export const ServiceDataController = {
  createService,
  getAllService,
  getServiceById,
  updateServiceById,
  fetchOverdueOrPendingServices,
};
