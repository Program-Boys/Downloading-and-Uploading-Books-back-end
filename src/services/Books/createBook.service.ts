import { Request } from 'express';
import { PrismaClient, Books } from '@prisma/client';
import { randomUUID } from 'crypto';
import { AppError } from '../../errors/AppError';
import { IBookRequest } from '../../interfaces/books/books';

const createBookService = async (
  req: Request,
  { name, gender }: IBookRequest,
): Promise<Books> => {
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

  const bookAlreadyExists = await prisma.books.findFirst({
    where: {
      name: req.file?.originalname!,
    },
  });

  if (bookAlreadyExists) {
    throw new AppError(400, 'This book already exists');
  }

  name = req.file?.originalname!;
  gender = req.file?.originalname!;

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
