import { Bike } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createBike = async (bikeData: Bike) => {
  // console.log(bikeData);

  const isCustomerExist = await prisma.customer.findUnique({
    where: {
      customerId: bikeData.customerId,
    },
  });

  if (!isCustomerExist) {
    throw new Error("Customer Not Found.");
  }

  const result = await prisma.bike.create({
    data: bikeData,
  });

  return result;
};

const getAllBike = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const getBikeById = async (bikeId: string) => {
  const isExist = await prisma.bike.findUnique({
    where: {
      bikeId,
    },
  });

  if (!isExist) {
    throw new Error("Bike Not Found.");
  }
  const result = await prisma.bike.findUnique({
    where: {
      bikeId,
    },
  });
  return result;
};

export const BikeServices = {
  createBike,
  getAllBike,
  getBikeById,
};
