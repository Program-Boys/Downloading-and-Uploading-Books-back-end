import { User } from '../../entities/user';
import { IUsersRepository } from '../../repositories/IUserRepositories';

interface IUserRequest {
  email: string;
  password: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, password }: IUserRequest) {
    if (email !== 'angela@gmail.com') {
      throw new Error('You are not admin');
    }

    const userCreate = User.create({ email, password });
    const user = await this.usersRepository.create(userCreate);

    return user;
  }
}

export { CreateUserService };
