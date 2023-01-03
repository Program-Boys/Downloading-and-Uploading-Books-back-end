// import { Request } from 'express';
// import { prisma } from '../../../prisma/client/client';
// import { Books } from '@prisma/client';
// import { TypeBookId } from '../../interfaces/books/books';
// import { AppError } from '../../errors/AppError';

// const patchBookFileService = async (
//   req: Request,
//   { id }: TypeBookId,
// ): Promise<void> => {
//   const findBook = await prisma.books.findFirst({
//     where: {
//       id,
//     },
//   });

//   if (!findBook) {
//     throw new AppError(404, 'Book not found');
//   }

//   //   const indexToFindFile = req.file?.path
//   //     .split('')
//   //     .indexOf(`Books/uploads/${req.file.filename}`);

//   // const indexToFindFile = req.file?.path.search(/uploads/)! + 8;

//   // const pathToUpload = req.file?.path.substring(
//   //   indexToFindFile,
//   //   req.file.path.length,
//   // );

//   // const acharArquivo = await prisma.bookFile.findFirst({
//   //   where: {
//   //     id,
//   //   },
//   // });

//   // console.log(acharArquivo?.path);

//   // console.log(pathToUpload);

//   //   const pathToUpload = req.file?.path
//   //     .split('-')
//   //     .findIndex(indexToFindFile)
//   //     .substring(65, req.file.path.length);

//   //   console.log(
//   //     req.file?.path.split('-').indexOf(`Books/uploads/${req.file.filename}`),
//   //   );
//   //   console.log(req.file?.path.split('-'));
// };

// export default patchBookFileService;
