import { User } from '../../entities/user';
import { AppError } from '../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUserRepositories';

interface IUserRequest {
  email: string;
  password: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, password }: IUserRequest) {
    if (email !== 'angela@gmail.com') {
      throw new AppError(400, 'You are not admin');
    }

    const userCreate = User.create({ email, password });
    const user = await this.usersRepository.create(userCreate);

    return user;
  }
}

export { CreateUserService };
