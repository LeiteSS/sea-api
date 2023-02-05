import { getRepository } from "typeorm";

import AppError from "../../shared/error/AppError";

import { Month } from "../entity/Month";

export default class MonthService {
  async newMonth(month: Month) {
    const monthRepository = getRepository(Month);

    const createData = {
      ...month,
      createdAt: new Date()
    }

    const savedMonth = await monthRepository.save(createData);

    return savedMonth;
  }

  async updateMonth(month: Month, idMonth: number) {
    const monthRepository = getRepository(Month);
    const monthFounded = await monthRepository.findOne({ where: { id: idMonth.toString() }});
    if (!monthFounded) {
      throw new AppError('Mês não encontrado', 401);
    }

    monthFounded.status = month.status;
    monthFounded.userStory = month.userStory;
    monthFounded.theme = month.theme;
    monthFounded.epic = month.epic;
    monthFounded.updateAt = new Date();

    await monthRepository.save(monthFounded);

    return { mag: 'Mês salvo com sucesso!' }
  }

  async allMonths() {
    const monthRepository = getRepository(Month);

    const monthsFound = await monthRepository.find();

    return monthsFound;
  }
}