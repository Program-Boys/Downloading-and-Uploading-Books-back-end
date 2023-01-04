import { Request } from 'express';
import { Books } from '@prisma/client';
import { prisma } from '../../../prisma/client/client';
import { randomUUID } from 'crypto';
import { AppError } from '../../errors/AppError';
import { IBookRequest } from '../../interfaces/books/books';

const createBookService = async (
  req: Request,
  { name, gender }: IBookRequest,
): Promise<Books> => {
  const user = await prisma.user.findFirst({
    include: {
      books: true,
    },
    where: {
      id:
        'aacf5712-25d1-4446-ab83-34dac2c25bbe' ||
        '657ad93b-a1f2-489b-a427-5fbecc3b9459',
    },
  });

  const bookAlreadyExists = await prisma.books.findFirst({
    where: {
      name: req.file?.filename!,
    },
  });

  if (bookAlreadyExists) {
    throw new AppError(400, 'This book already exists');
  }

  name = req.file?.originalname!;
  gender = req.file?.originalname!;

  const newBook = await prisma.books.create({
    data: {
      id: randomUUID(),
      name,
      gender,
      createdAt: new Date(),
      ownerId: user?.id,
      bookFile: {
        create: {
          id: randomUUID(),
          originalName: req.file?.originalname!,
          filename: req.file?.filename!,
          path: req.file?.path!,
        },
      },
    },
  });

  return newBook;
};

export default createBookService;
