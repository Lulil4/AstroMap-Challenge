import express from "express";
import * as astroController from "./goal-map.controller";

export const goalRouter = express.Router();
goalRouter.get("/", astroController.getGoal);
