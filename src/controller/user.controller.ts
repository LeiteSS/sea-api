import { Request, Response } from 'express';

import UserService from '../model/service/user.service';

export default class UserController {
  async signIn(req: Request, res: Response) {
    const { email, password } = req.body;
    const userService = new UserService();
    const users = await userService.sigin({ email, password });

    return res.status(200).send(users);
  }

  async signUp(req: Request, res: Response) {
    const userService = new UserService();
    const users = await userService.signUp(req.body);

    return res.status(201).send(users);
  }

  async me(req: Request, res: Response) {
    const userService = new UserService();
    const user = await userService.me(req.user); 

    return res.status(201).send(user);
  }
}