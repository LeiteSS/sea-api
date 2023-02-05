import { Request, Response} from 'express';

import WeeklyService from '../model/service/weekly.service';

export default class WeeklyController {
  async newWeekly(req: Request, res: Response) {
    const weekService = new WeeklyService();
    const { week } = req.body;

    const result = await weekService.newWeek(week);

    return res.status(200).send(result);
  }
  async updateWeekly(req: Request, res: Response) {
    const weekService = new WeeklyService();
    const { week } = req.body;
    const { idWeek } = req.params;

    const result = await weekService.updateWeek(week, Number(idWeek));

    return res.status(201).send(result);
  }
  async allWeeks(req: Request, res: Response) {
    const weekService = new WeeklyService();
    const weeks = await weekService.allWeek();

    return res.status(201).send({ weeks });
  }
}