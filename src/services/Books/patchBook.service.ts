import { prisma } from '../../../prisma/client/client';
import { AppError } from '../../errors/AppError';
import { TypePatchBook } from '../../interfaces/books/books';
import { Books } from '@prisma/client';

const patchBookService = async ({
  id,
  name,
  gender,
}: TypePatchBook): Promise<Books> => {
  const findBook = await prisma.books.findFirst({
    where: {
      id,
    },
  });

  if (!findBook) {
    throw new AppError(404, 'Book not foud.');
  }

  const patchedBook = await prisma.books.update({
    where: {
      id,
    },
    data: {
      name: name || findBook.name,
      gender: gender || findBook.gender,
      updatedAt: new Date(),
    },
  });

  return patchedBook;
};

export default patchBookService;
