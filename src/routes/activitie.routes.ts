import { Router } from "express";
import ActivityController from "../controller/activity.controller";

const activitiesRouter = Router();
const activitiesController = new ActivityController();

activitiesRouter.post('/new_activity/:objectiveId', activitiesController.newActivity);
activitiesRouter.get('/all_activities/:objectiveId', activitiesController.allActivities);
activitiesRouter.post('/update_activity/:id', activitiesController.updateActivity)

export default activitiesRouter;