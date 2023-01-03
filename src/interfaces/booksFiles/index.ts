import { BookFile } from '@prisma/client';

export type BooksFilesExit = Omit<BookFile, 'bookId'>;
