import { User } from '@prisma/client';

export class InMemoryUserRepository {
  public userInMemory: User[] = [];

  async create(user: User) {
    this.userInMemory.push(user);
  }
}
