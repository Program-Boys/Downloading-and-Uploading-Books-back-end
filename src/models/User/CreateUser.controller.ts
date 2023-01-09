import { Request, Response } from 'express';
import { CreateUserService } from './CreateUser.service';

class CreateUserController {
  constructor(private createUser: CreateUserService) {}

  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const user = await this.createUser.execute({ email, password });

    return response.json(user);
  }
}

export { CreateUserController };
