import { Router } from "express";
import GoalsController from '../controller/goals.controller';
import userAuthenticated from "../middlewares/userAuthenticated";

const goalsRouter = Router();
const goalsController = new GoalsController();

goalsRouter.use(userAuthenticated);

goalsRouter.post('/new_goal', goalsController.newGoal);
goalsRouter.get('/all_goals', goalsController.allGoals);
goalsRouter.post('/update_goal/:id', goalsController.updateGoal)

export default goalsRouter;