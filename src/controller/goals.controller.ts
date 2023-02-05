import { Request, Response } from 'express';

import GoalService from '../model/service/goal.service';

export default class GoalsController {
  async newGoal(req: Request, res: Response) {
    const goalService = new GoalService();
    const { goal } = req.body;
    const user = req.user;
    const result = await goalService.newGoal(goal, user);

    return res.status(200).send(result);
  }

  async updateGoal(req: Request, res: Response) {
    const goalService = new GoalService();
    const { goal } = req.body;
    const { idGoal } = req.params;

    const result = await goalService.updateGoal(goal, Number(idGoal));

    return res.status(201).send(result);
  }

  async allGoals(req: Request, res: Response) {
    const goalService = new GoalService();
    const goals = await goalService.allGoals(req.user);

    return res.status(201).send({ goals });
  }
}