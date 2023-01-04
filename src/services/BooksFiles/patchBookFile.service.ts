import { BookFile } from '@prisma/client';
import { Request } from 'express';
import { prisma } from '../../../prisma/client/client';
import { AppError } from '../../errors/AppError';
import { BookToUpdate } from '../../interfaces/booksFiles';

const patchBookFileService = async (
  req: Request,
  { originalName, filename, id }: BookToUpdate,
): Promise<BookFile> => {
  const findBookFile = await prisma.bookFile.findFirst({
    where: {
      id,
    },
  });

  if (!findBookFile) {
    throw new AppError(404, 'Book file not found');
  }

  const indexToFindFile = req.file?.path.search(/uploads/)! + 8;
  const indexToFindFileInDatabase = findBookFile.path.search(/uploads/)! + 8;

  const oldPath = findBookFile.path.substring(
    indexToFindFileInDatabase,
    findBookFile.path.length,
  );

  const pathToUpload = req.file?.path.substring(
    indexToFindFile,
    req.file.path.length,
  );

  findBookFile.path = findBookFile.path.replace(
    oldPath,
    pathToUpload as string,
  );

  await prisma.bookFile.update({
    where: {
      id: findBookFile.id,
    },
    data: {
      originalName: originalName || findBookFile.originalName,
      filename: filename || findBookFile.filename,
      path: findBookFile.path,
    },
  });

  return findBookFile;
};

export default patchBookFileService;
