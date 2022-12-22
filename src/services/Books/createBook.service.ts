import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
import { IBookRequest } from "../../interfaces/books/books";
import { Books } from "../../models/book.model";

const createBookService = async ({
  name,
  gender,
}: IBookRequest): Promise<Books> => {
  const prisma = new PrismaClient();

  const book = await prisma.books.findFirst({
    where: {
      name,
    },
  });

  if (book) {
    throw new Error("This book already exists");
  }

  return await prisma.books.create({
    data: {
      id: randomUUID(),
      name,
      gender,
      createdAt: new Date(),
    },
  });
};

export default createBookService;
