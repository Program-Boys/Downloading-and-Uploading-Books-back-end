import { Books } from '@prisma/client';
import { prisma } from '../../../prisma/client/client';

const listBooksService = async (): Promise<Books[]> => {
  const books = await prisma.books.findMany({
    include: {
      bookFile: true,
    },
  });

  return books;
};

export default listBooksService;
