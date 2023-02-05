import { Router } from 'express';
import UserController from '../controller/user.controller';
import userAuthenticated from '../middlewares/userAuthenticated';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/signIn', userController.signIn);
userRouter.post('/signUp', userController.signUp);
userRouter.get('/me', userAuthenticated, userController.me);

export default userRouter;