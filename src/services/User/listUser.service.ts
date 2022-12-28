import { User } from '@prisma/client';
import { prisma } from '../../../prisma/client/client';

const listUserService = async (): Promise<Partial<User>> => {
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
