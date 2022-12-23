import { PrismaClient, User } from '@prisma/client';
import bycrpt from 'bcrypt';
import { randomUUID } from 'crypto';
import { IUserRequest } from '../../interfaces/user/user';

const createUserService = async ({
  email,
  password,
}: IUserRequest): Promise<Partial<User>> => {
  const prisma = new PrismaClient();

  if (email !== 'angela@gmail.com') {
    throw new Error('You are not admin');
  }

  const user = await prisma.user.create({
    include: {
      books: true,
    },
    data: {
      id: randomUUID(),
      email,
      password: await bycrpt.hash(password, 8),
    },
  });

  const userExit = {
    id: user.id,
    email: user.email,
    books: user.books,
  };

  return userExit;
};

export default createUserService;