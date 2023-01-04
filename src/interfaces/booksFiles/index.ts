import { BookFile } from '@prisma/client';

export type BooksFilesExit = Omit<BookFile, 'bookId'>;
export type BookToUpdate = Pick<BookFile, 'id' | 'originalName' | 'filename'>;
