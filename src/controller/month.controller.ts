import { Request, Response} from 'express';

import MonthService from '../model/service/month.service';

export default class MonthController {
  async newMonth(req: Request, res: Response) {
    const monthService = new MonthService();
    const { month } = req.body;

    const result = await monthService.newMonth(month);

    return res.status(200).send(result);
  }
  async updateMonth(req: Request, res: Response) {
    const monthService = new MonthService();
    const { month } = req.body;
    const { idMonth } = req.params;

    const result = await monthService.updateMonth(month, Number(idMonth));

    return res.status(201).send(result);
  }
  async allMonths(req: Request, res: Response) {
    const monthService = new MonthService();
    const months = await monthService.allMonths();

    return res.status(201).send({ months });
  }
}