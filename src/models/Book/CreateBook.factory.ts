import { PrismaBooksRepository } from '../../repositories/prisma/PrismaRepositorys';
import { CreateBookController } from './CreateBook.controller';
import { CreateBookService } from './CreateBook.service';

export const createBookFactory = () => {
  const booksRepository = new PrismaBooksRepository();
  const createBook = new CreateBookService(booksRepository);
  const createBookController = new CreateBookController(createBook);
  return createBookController;
};
