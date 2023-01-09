import { prisma } from '../../../prisma/client/client';
import { User } from '@prisma/client';
import { IUsersRepository } from '../IUserRepositories';
import { randomUUID } from 'crypto';

class PrismaUsersRepository implements IUsersRepository {
  async create({ email, password }: User): Promise<User> {
    const user = await prisma.user.create({
      data: {
        id: randomUUID(),
        email,
        password,
      },
    });

    return user;
  }

  async list(): Promise<Partial<User[]>> {
    const users = await prisma.user.findMany({});

    return users;
  }
}

export { PrismaUsersRepository };
