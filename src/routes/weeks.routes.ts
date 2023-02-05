import { Router } from "express";

import WeeklyController from "../controller/weekly.controller";


const weeksRouter = Router();
const weeksController = new WeeklyController();

weeksRouter.post('/new_week', weeksController.newWeekly);
weeksRouter.get('/all_weeks', weeksController.allWeeks);
weeksRouter.post('/update_week/:id', weeksController.updateWeekly);

export default weeksRouter;