import { Request, Response} from 'express';

import ArtifactService from '../model/service/artifact.service';

export default class ArtifactController {
  async newActifact(req: Request, res: Response) {
    const actifactService = new ArtifactService();
    const { artifact } = req.body;
    const activity = req.activity;
    const result = await actifactService.newArtifact(artifact, activity);

    return res.status(200).send(result);
  }
  async updateActifact(req: Request, res: Response) {
    const actifactService = new ArtifactService();
    const { artifact } = req.body;
    const { idActivity } = req.params;
    const activity = req.activity

    const result = await actifactService.updateArtifact(artifact, Number(idActivity), activity);

    return res.status(201).send(result);
  }
  async allActifacts(req: Request, res: Response) {
    const actifactService = new ArtifactService();
    const goals = await actifactService.allArtifacts(req.activity);

    return res.status(201).send({ goals });
  }
}