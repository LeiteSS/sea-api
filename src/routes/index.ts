import { Router } from 'express';

import userRouter  from './user.routes';
import objectivesRouter from './objectives.routes';
import goalsRouter from './goals.routes';
import activitiesRouter from './activitie.routes';
import artifactsRouter from './artifacts.routes';
import monthsRouter from './months.routes';
import weeksRouter from './weeks.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/objective', objectivesRouter);
routes.use('/goal', goalsRouter);
routes.use('/activity', activitiesRouter);
routes.use('/artifact', artifactsRouter);
routes.use('/month', monthsRouter);
routes.use('/week', weeksRouter);

export default routes;