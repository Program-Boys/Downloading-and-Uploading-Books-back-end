import { Request, Response } from 'express';
import createUserService from '../../services/User/createUser.service';

export class UserController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const createUser = await createUserService({ email, password });

    return res.status(201).json(createUser);
  }
}
