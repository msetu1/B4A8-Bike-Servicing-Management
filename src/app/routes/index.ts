import express from "express";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    route: ,
  },
  {
    path: "/bikes",
    route: ,
  },
  {
    path: "/services",
    route: ,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;