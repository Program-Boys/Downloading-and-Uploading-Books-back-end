import { prisma } from '../../../prisma/client/client';
import { Books } from '@prisma/client';
import { TypeBookId } from '../../interfaces/books/books';
import { AppError } from '../../errors/AppError';

const listOneBookService = async ({ id }: TypeBookId): Promise<Books> => {
  const findBook = await prisma.books.findFirst({
    where: {
      id,
    },
  });

  if (!findBook) {
    throw new AppError(404, 'Book not found');
  }

  return findBook;
};

export default listOneBookService;
