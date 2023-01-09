import { User } from '../entities/user';

interface IUsersRepository {
  create(user: User): Promise<User>;
  list(users: User[]): Promise<Partial<User[]>>;
}

export { IUsersRepository };
