import { User } from '@prisma/client';

export class InMemoryUserRepository implements User {
  id!: string;
  email!: string;
  password!: string;
  public userInMemory: User[] = [];

  async create(user: User) {
    this.userInMemory.push(user);
  }
}
