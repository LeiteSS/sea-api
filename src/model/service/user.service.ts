import { getRepository } from "typeorm";
import { sign } from 'jsonwebtoken';
import md5 from "crypto-js/md5";

import AppError from "../../shared/error/AppError";
import auth from "../../config/auth";

import { User } from "../entity/User";
import { UserSignIn } from "../dto/user.signin.dto";
import { UserSignUp } from "../dto/user.signup.dto";

export default class UserService {
  async sigin(user: UserSignIn) {
    const userRepository = getRepository(User)
    const { email, password } = user;
    const passwordHash = md5(password).toString();
    const existUser = await userRepository.findOne({ where: { email, password: passwordHash }})

    if (!existUser) {
      throw new AppError('Usuario não encontrado', 401);
    }

    const { secret, expiresIn } = auth.jwt;

    const token = sign({
      firstName: existUser.firstName,
      lastName: existUser.lastName
    }, secret, {
      subject: existUser.id,
      expiresIn,
    });

    // @ts-expect-error ignore
    delete existUser.password

    return { accessToken: token }
  }

  async signUp(user: UserSignUp) {
    const userRepository = getRepository(User);
    const existUser = await userRepository.findOne({ where: { email: user.email }});

    if (existUser) {
      throw new AppError('Já existe um usuário cadastrado com esse email', 401);
    }

    const userData = {
      ...user,
      password: md5(user.password).toString()
    }

    const userCreate = await userRepository.save(userData);

    const { secret, expiresIn } = auth.jwt;

    const token = sign({
      firstName: user.firstName,
      lastName: user.lastName
    }, secret, {
      subject: userCreate.id,
      expiresIn,
    });

    return { accessToken: token }
  }

  async me(user: Partial<User>) {
    const userRepository = getRepository(User);
    const currentUser = await userRepository.findOne({ where: { id: user.id }})

    if(!currentUser) {
      throw new AppError('Usuario não encontrado', 401);
    }

    // @ts-expect-error ignore
    delete currentUser.password;

    return currentUser;
  }
}