import express from "express";
import { ServiceDataController } from "./service.controller";

const router = express.Router();

router.post("/", ServiceDataController.createService);
router.get("/status", ServiceDataController.fetchOverdueOrPendingServices);
router.get("/", ServiceDataController.getAllService);
router.get("/:id", ServiceDataController.getServiceById);
router.put("/:id", ServiceDataController.updateServiceById);

export const ServiceRoute = router;
