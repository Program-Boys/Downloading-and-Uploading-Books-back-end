import { BookFile } from '@prisma/client';
import { prisma } from '../../../prisma/client/client';
import { BooksFilesExit } from '../../interfaces/booksFiles';

const listBooksFilesService = async (): Promise<BooksFilesExit[]> => {
  const fileBooks = await prisma.bookFile.findMany({});

  const newExit = fileBooks.map((file) => {
    return {
      id: file?.id,
      originalName: file?.originalName,
      filename: file?.filename,
    };
  });

  return newExit;
};

export default listBooksFilesService;
