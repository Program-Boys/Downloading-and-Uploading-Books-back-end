import { Request, Response } from 'express';
import createUserService from '../../services/User/createUser.service';
import listUserService from '../../services/User/listUser.service';

export class UserController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const createUser = await createUserService({ email, password });

    return res.status(201).json(createUser);
  }

  async list(req: Request, res: Response) {
    const listUser = await listUserService();

    return res.json(listUser);
  }
}
