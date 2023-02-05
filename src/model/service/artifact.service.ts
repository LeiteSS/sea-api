import { getRepository } from 'typeorm';

import AppError from '../../shared/error/AppError';

import { Artifact } from '../entity/Artifact';
import { Activity } from '../entity/Activity';

export default class ArtifactService {
  async newArtifact(artifact: Artifact, activity: Partial<Activity>) {
    const activityRepository = getRepository(Activity);
    const artifactRepository = getRepository(Artifact);
    const currentActivity = await activityRepository.findOne({ where: { id: activity.id } });

    const data = {
      ...artifact,
      createAt: new Date(),
      activity: currentActivity as Activity
    }

    const activitySaved = await artifactRepository.save(data);

    return activitySaved;
  }

  async updateArtifact(artifact: Artifact, idArtifact: number, activity: Partial<Activity>) {
    const activityRepository = getRepository(Activity);
    const artifactRepository = getRepository(Artifact);
    const currentActivity = await activityRepository.findOne({ where: { id: activity.id } });
    const artifactFound = await artifactRepository.findOne({ where: { id: idArtifact.toString() }});


    if (!artifactFound) {
      throw new AppError('Artefato não encontrada', 401);
    }

 
    artifactFound.title = artifact.title;
    artifactFound.body = artifact.body;
    artifactFound.activity = currentActivity as Activity;
    artifactFound.updateAt = new Date();

    await activityRepository.save(artifactFound);

    return { mag: 'Artefato salva com sucesso!' }
  }

  async allArtifacts(activity: Partial<Activity>) {
    const artifactRepository = getRepository(Artifact);

    const artifactFound = await artifactRepository.find({ where: activity});

    return artifactFound;
  }
}