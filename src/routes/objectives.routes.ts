import { Router } from "express";
import ObjectivesController from '../controller/objectives.controller';
import userAuthenticated from "../middlewares/userAuthenticated";

const objectivesRouter = Router();
const objectivesController = new ObjectivesController();

objectivesRouter.use(userAuthenticated);

objectivesRouter.post('/new_objective', objectivesController.newObjective);
objectivesRouter.post('/update_objective/:id', objectivesController.updateObjective)
objectivesRouter.get('/all_objectives', objectivesController.allObjectives);

export default objectivesRouter;