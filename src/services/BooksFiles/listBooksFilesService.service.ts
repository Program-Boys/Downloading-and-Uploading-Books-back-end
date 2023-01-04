import { BookFile } from '@prisma/client';
import { prisma } from '../../../prisma/client/client';
import { BooksFilesExit } from '../../interfaces/booksFiles';

const listBooksFilesService = async (): Promise<BooksFilesExit[]> => {
  const fileBooks = await prisma.bookFile.findMany({});

  return fileBooks;
};

export default listBooksFilesService;
