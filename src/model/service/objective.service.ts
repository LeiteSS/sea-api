import { getRepository } from "typeorm";

import AppError from "../../shared/error/AppError";
import { Goal } from "../entity/Goal";
import { Objective } from "../entity/Objective";

export default class ObjectiveService {
  async newObjective(objective: Objective, goal: Partial<Goal>) {
    const goalRepository = getRepository(Goal);
    const objectiveRepository = getRepository(Objective);
    const currentGoal = await goalRepository.findOne({ where: { id: goal.id }});
    const createData = {
      ...objective,
      createdAt: new Date(),
      goal: currentGoal as Goal
    }

    const savedObjective = await objectiveRepository.save(createData);
    return savedObjective;
  }

  async updateObjective(objective: Objective, idObjective: number) {
    const objectiveRepository = getRepository(Objective);
    const foundObjective = await objectiveRepository.findOne({ where: { id: idObjective.toString() }});
    if (!foundObjective) {
      throw new AppError('Objectivo não encontrado', 401)
    }

    foundObjective.updateAt = new Date();
    foundObjective.description = objective.description;
    foundObjective.title = objective.title;
    foundObjective.deadline = objective.deadline;
    foundObjective.status = objective.status;

    await objectiveRepository.save(foundObjective);

    return { mag: 'Objetivo salvo com sucesso!' }
  }

  async allObjectives(goal: Partial<Goal>) {
    const objectiveRepository = getRepository(Objective);
    const objectivesFound = await objectiveRepository.find({ where: { goal: goal}});

    return objectivesFound;
  }
}