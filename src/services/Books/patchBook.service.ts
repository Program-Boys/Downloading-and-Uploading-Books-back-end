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

  if (name.length < 5 || gender.length < 5) {
    throw new AppError(400, 'Enter characters greater than five.');
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
