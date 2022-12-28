import { prisma } from '../../../prisma/client/client';
import { AppError } from '../../errors/AppError';
import { BookDeletion } from '../../interfaces/books/books';

const deleteBookService = async ({ id }: BookDeletion): Promise<boolean> => {
  const bookToDelete = await prisma.books.findFirst({
    where: {
      id,
    },
  });

  if (!bookToDelete) {
    throw new AppError(404, 'Book not found');
  }

  const bookToBeDeleted = await prisma.books.delete({
    where: {
      id: bookToDelete.id,
    },
  });

  return true;
};

export default deleteBookService;
