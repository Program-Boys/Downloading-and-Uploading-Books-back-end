import { prisma } from '../../../prisma/client/client';
import { User } from '../../entities/user';
import { IUsersRepository } from '../IUserRepositories';
import { randomUUID } from 'crypto';
import { IBooksRepository } from '../IBooksRepositories';
import { Book } from '../../entities/book';

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

class PrismaBooksRepository implements IBooksRepository {
  async create({ name, gender }: Book): Promise<Book> {
    const book = await prisma.books.create({
      data: {
        id: randomUUID(),
        name,
        gender,
        ownerId: null,
      },
    });

    return book;
  }

  async list(): Promise<Book[]> {
    const books = await prisma.books.findMany({});

    return books;
  }
}

export { PrismaUsersRepository };
export { PrismaBooksRepository };
