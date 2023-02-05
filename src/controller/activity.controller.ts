import { Request, Response} from 'express';

import ActivityService from '../model/service/activity.service';

export default class ActivityController {
  async newActivity(req: Request, res: Response) {
    const activityService = new ActivityService();
    const { activity } = req.body;
    const { objectiveId } = req.params;
    const result = await activityService.newActivity(activity, Number(objectiveId));

    return res.status(200).send(result);
  }
  async updateActivity(req: Request, res: Response) {
    const activityService = new ActivityService();
    const { activitiy } = req.body;
    const { objectiveId } = req.params;
    const { idActivity } = req.params;

    const result = await activityService.updateActivity(activitiy, Number(idActivity), Number(objectiveId));

    return res.status(201).send(result);
  }
  async allActivities(req: Request, res: Response) {
    const activityService = new ActivityService();
    const { objectiveId } = req.params;
    const activities = await activityService.allActivities(Number(objectiveId));

    return res.status(201).send({ activities });
  }
}