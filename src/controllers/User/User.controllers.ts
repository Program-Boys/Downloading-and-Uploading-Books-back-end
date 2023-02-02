import { Request, Response } from 'express';
import loginService from '../../services/Login/login.service';
import createUserService from '../../services/User/createUser.service';
import listUserService from '../../services/User/listUser.service';

export class UserController {
  static async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const createUser = await createUserService({ email, password });

    return res.status(201).json(createUser);
  }

  static async list(req: Request, res: Response) {
    const listUser = await listUserService();

    return res.status(200).json(listUser);
  }

  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const token = await loginService({ email, password });

    return res.status(200).json(token);
  }
}
