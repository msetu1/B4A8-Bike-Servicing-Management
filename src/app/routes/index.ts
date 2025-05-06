import express from "express";
import { CustomerRoute } from "../modules/Customer/customer.route";
import { BikeRoute } from "../modules/Bike/bike.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    route: CustomerRoute,
  },
  {
    path: "/bikes",
    route: BikeRoute,
  },
  // {
  //   path: "/services",
  //   route: ,
  // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;