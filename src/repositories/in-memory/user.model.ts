import { User } from '../../entities/user';
import { IUsersRepository } from '../IUserRepositories';
import { randomUUID } from 'crypto';

class InMemoryUserRepository implements IUsersRepository {
  public users: User[] = [];

  async create(user: User): Promise<User> {
    Object.assign(user, {
      id: randomUUID(),
    });
    this.users.push(user);
    return user;
  }

  async list() {
    return this.users;
  }
}

export { InMemoryUserRepository };
