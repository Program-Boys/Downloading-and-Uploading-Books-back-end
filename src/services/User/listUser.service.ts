import { PrismaClient, User } from '@prisma/client';

const listUserService = async (): Promise<Partial<User>> => {
  const prisma = new PrismaClient();

  const user = await prisma.user.findFirst({
    include: {
      books: true,
    },
  });

  const exitUser = {
    id: user?.id,
    email: user?.email,
    books: user?.books,
  };

  return exitUser;
};

export default listUserService;
