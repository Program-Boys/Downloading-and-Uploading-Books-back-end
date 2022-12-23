import { PrismaClient, Books } from '@prisma/client';
import { randomUUID } from 'crypto';
import { AppError } from '../../errors/AppError';
import { IBookRequest } from '../../interfaces/books/books';

const createBookService = async ({
  name,
  gender,
}: IBookRequest): Promise<Books> => {
  const prisma = new PrismaClient();

  const user = await prisma.user.findFirst({
    include: {
      books: true,
    },
    where: {
      email: '4912ad29-f6dd-4efb-a94f-d7ff1d2bb9fc',
    },
  });

  const book = await prisma.books.findFirst({
    where: {
      name,
    },
  });

  if (book) {
    throw new AppError(400, 'This book already exists');
  }

  return await prisma.books.create({
    include: {
      owner: true,
    },
    data: {
      id: randomUUID(),
      name,
      gender,
      createdAt: new Date(),
      ownerId: user?.id,
    },
  });
};

export default createBookService;
