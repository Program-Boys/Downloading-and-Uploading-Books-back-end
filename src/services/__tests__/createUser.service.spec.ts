import { Prisma } from '@prisma/client';
import { InMemoryUserRepository } from '../../models/user.model';
import createUserService from '../User/createUser.service';

describe('Create a User', () => {
  it('Should be able to create a user', async () => {
    const userRepository = new InMemoryUserRepository();

    const email = 'guiteste@gmail.com';
    const password = '12345678';

    const user = await createUserService({ email, password });

    await userRepository.create(user);

    expect(userRepository.userInMemory.length == 1);
  });
});
