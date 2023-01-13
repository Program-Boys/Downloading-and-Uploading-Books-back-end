import { User } from '@prisma/client';
import { prisma } from '../../../prisma/client/client';
import bycrpt from 'bcrypt';
import { randomUUID } from 'crypto';
import { IUserRequest } from '../../interfaces/user/user';

const createUserService = async ({
  email,
  password,
}: IUserRequest): Promise<User> => {
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

  return { ...user, password: '' };
};

export default createUserService;
