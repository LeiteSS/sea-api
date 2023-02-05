import { Request, Response } from 'express';

import ObjectiveService from '../model/service/objective.service';

export default class ObjectivesController {
  async newObjective(req: Request, res: Response) {
    const objectiveService = new ObjectiveService();
    const { objective } = req.body;
    const goal = req.goal;
    const result = await objectiveService.newObjective(objective, goal);
    
    return res.status(200).send(result);
  }

  async updateObjective(req: Request, res: Response) {
    const objectiveService = new ObjectiveService();
    const { objective } = req.body;
    const { objectiveId } = req.params;
    const result = await objectiveService.updateObjective(objective, Number(objectiveId));

    return res.status(201).send(result);
  }

  async allObjectives(req: Request, res: Response) {
    const objectiveService = new ObjectiveService();
    const goal = req.goal;
    const objectives = await objectiveService.allObjectives(goal);

    return res.status(201).send({ objectives });
  }
}