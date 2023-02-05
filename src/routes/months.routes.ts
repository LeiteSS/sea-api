import { Router } from "express";

import MonthController from "../controller/month.controller";


const monthsRouter = Router();
const monthsController = new MonthController();

monthsRouter.post('/new_month', monthsController.newMonth);
monthsRouter.get('/all_months', monthsController.allMonths);
monthsRouter.post('/update_month/:id', monthsController.updateMonth);

export default monthsRouter;