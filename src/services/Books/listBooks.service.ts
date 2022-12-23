import { PrismaClient, Books } from '@prisma/client';

const listBooksService = async (): Promise<Books[]> => {
  const prisma = new PrismaClient();

  const books = await prisma.books.findMany();

  return books;
};

export default listBooksService;
