import { Prisma } from '@prisma/client';
import { AppError } from '../../errors/AppError';
import { InMemoryUserRepository } from '../../models/user.model';
import createUserService from '../User/createUser.service';

const userRepository = new InMemoryUserRepository();

describe('Create a User', () => {
  it('Should be able to create a user', async () => {
    const email = 'angela@gmail.com';
    const password = '12345678';

    const user = await createUserService({ email, password });

    await userRepository.create(user);

    expect(userRepository.userInMemory).toBeTruthy();
  });

  it('Should not be able to create a user', async () => {
    const email = 'guiteste@gmail.com';
    const password = '12345678';

    const user = await createUserService({ email, password });

    await userRepository.create(user);

    expect(userRepository.userInMemory).rejects.toThrowError(
      new AppError(400, 'You are not admin'),
    );
  });
});
