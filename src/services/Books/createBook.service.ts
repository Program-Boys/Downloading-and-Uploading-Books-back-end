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
      id:
        '776d634d-879b-4d18-bc80-e06714841847' ||
        '657ad93b-a1f2-489b-a427-5fbecc3b9459',
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
