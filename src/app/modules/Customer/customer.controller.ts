import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CustomerService } from "./customer.service";
import status from "http-status-codes";

const createCustomer = catchAsync(async (req, res) => {
  const result = await CustomerService.createCustomer(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Customer created successfully !",
    data: result,
  });
});

const getAllCustomer = catchAsync(async (req, res) => {
  const result = await CustomerService.getAllCustomer();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customers fetched successfully !",
    data: result,
  });
});

const getCustomerById = catchAsync(async (req, res) => {
  const result = await CustomerService.getCustomerById(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customers fetched successfully !",
    data: result,
  });
});

const updateCustomer = catchAsync(async (req, res) => {
  const result = await CustomerService.updateCustomer(req.params.id, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});
const deleteCustomer = catchAsync(async (req, res) => {
  await CustomerService.deleteCustomer(req.params.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer deleted successfully!",
    data: {},
  });
});

export const CustomerController = {
  createCustomer,
  getAllCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
