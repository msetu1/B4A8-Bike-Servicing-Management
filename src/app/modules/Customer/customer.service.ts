import { Customer } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createCustomer = async (customerData: Customer) => {
  // console.log(customerData);

  const isExist = await prisma.customer.findFirst({
    where: {
      email: customerData.email,
    },
  });

  // console.log(isExist);

  if (isExist) {
    throw new Error("Customer Already Exist..");
  }

  const result = await prisma.customer.create({
    data: customerData,
  });
  return result;
};

const getAllCustomer = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const getCustomerById = async (customerId: string) => {
  const isExist = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });
  // console.log(isExist);

  if (!isExist) {
    throw new Error("Customer Not Found.");
  }
  const result = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });
  return result;
};

const updateCustomer = async (
  customerId: string,
  customerData: Partial<Customer>
): Promise<Customer> => {
  const isExist = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });
  // console.log(isExist);

  if (!isExist) {
    throw new Error("Customer Not Found.");
  }

  const result = await prisma.customer.update({
    where: {
      customerId,
    },
    data: customerData,
  });

  return result;
};
const deleteCustomer = async (customerId: string): Promise<Customer> => {
  const isExist = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });
  // console.log(isExist);

  if (!isExist) {
    throw new Error("Customer Not Found.");
  }

  const result = await prisma.customer.delete({
    where: {
      customerId,
    },
  });

  return result;
};

export const CustomerService = {
  createCustomer,
  getAllCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
