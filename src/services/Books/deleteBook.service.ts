import { prisma } from '../../../prisma/client/client';
import { AppError } from '../../errors/AppError';
import { BookDeletion } from '../../interfaces/books/books';

const deleteBookService = async ({ id }: BookDeletion): Promise<void> => {
  const bookToDelete = await prisma.books.findFirst({
    where: {
      id,
    },
  });

  if (!bookToDelete) {
    throw new AppError(404, 'Book not found');
  }

  await prisma.books.delete({
    where: {
      id,
    },
  });
};

export default deleteBookService;
