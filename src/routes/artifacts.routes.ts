import { Router } from "express";
import ArtifactController from "../controller/artifact.controller";


const artifactsRouter = Router();
const artifactsController = new ArtifactController();

artifactsRouter.post('/new_artifact/:activityId', artifactsController.newActifact);
artifactsRouter.get('/all_artifacts/:activityId', artifactsController.allActifacts);
artifactsRouter.post('/update_artifact/:id', artifactsController.updateActifact);

export default artifactsRouter;