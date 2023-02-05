import { getRepository } from "typeorm";

import AppError from "../../shared/error/AppError";

import { Weekly } from "../entity/Weekly";

export default class WeeklyService {
  async newWeek(week: Weekly) {
    const weekRepository = getRepository(Weekly);

    const createData = {
      ...week,
      createdAt: new Date(),
    }

    const savedWeek = weekRepository.save(createData);
    return savedWeek;
  }

  async updateWeek(week: Weekly, idWeek: number) {
    const weekRepository = getRepository(Weekly);
    const weekFounded = await weekRepository.findOne({ where: { id: idWeek.toString() } });

    if (!weekFounded) {
      throw new AppError('Semana não encontrada', 401);
    }

    weekFounded.category = week.category;
    weekFounded.updateAt = new Date();
    weekFounded.description = week.description;
    weekFounded.status = week.status;
    weekFounded.title = week.title;

    await weekRepository.save(weekFounded);

    return { mag: 'Semana atualizada com sucesso' }
  }

  async allWeek() {
    const weekRepository = getRepository(Weekly);
    const weeksFound = await weekRepository.find();

    return weeksFound;
  }
}