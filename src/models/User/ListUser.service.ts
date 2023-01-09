import { User } from '../../entities/user';
import { IUsersRepository } from '../../repositories/IUserRepositories';

class ListUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute() {
    const listUsers = User.list();
    const allUsers = await this.usersRepository.list(listUsers);

    return allUsers;
  }
}

export { ListUserService };
