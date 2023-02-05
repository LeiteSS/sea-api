import { getRepository } from 'typeorm';

import AppError from '../../shared/error/AppError';

import { Activity } from '../entity/Activity';
import { Objective } from '../entity/Objective';

export default class ActivityService {
  async newActivity(activity: Activity, objectiveId: number) {
    const activityRepository = getRepository(Activity);
    const objectiveRepository = getRepository(Objective);
    const currentObjective = await objectiveRepository.findOne({ where: { id: objectiveId.toString() } });

    const data = {
      ...activity,
      createAt: new Date(),
      objective: currentObjective as Objective
    }

    const activitySaved = await activityRepository.save(data);

    return activitySaved;
  }

  async updateActivity(activity: Activity, idActivity: number, objectiveId: number) {
    const activityRepository = getRepository(Activity);
    const objectiveRepository = getRepository(Objective);
    const currentObjective = await objectiveRepository.findOne({ where: { id: objectiveId.toString() } });
    const activityFound = await activityRepository.findOne({ where: { id: idActivity.toString() }});


    if (!activityFound) {
      throw new AppError('Atividade não encontrada', 401);
    }

    activityFound.status = activity.status;
    activityFound.title = activity.title;
    activityFound.description = activity.description;
    activityFound.deadline = activity.deadline;
    activityFound.objective = currentObjective as Objective;
    activityFound.updateAt = new Date();

    await activityRepository.save(activityFound);

    return { mag: 'Atividade salva com sucesso!' }
  }

  async allActivities(objectiveId: number) {
    const activityRepository = getRepository(Activity);
    const objectiveRepository = getRepository(Objective);

    const objective = await objectiveRepository.findOne({ where: { id: objectiveId.toString() } }) as Objective

    const activitiesFound = await activityRepository.find({ where: { objective:  objective }});

    return activitiesFound;
  }
}