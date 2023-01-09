import { InMemoryUserRepository } from '../../models/user.model';
import createUserService from '../User/createUser.service';

describe('Create a User', () => {
  const userRepository = new InMemoryUserRepository();

  it('Should be able to create a user', async () => {
    const email = 'angela@gmail.com';
    const password = '12345678';

    const user = await createUserService({ email, password });

    await userRepository.create(user);

    expect(userRepository.userInMemory[0]).toBe(user);
  });

  it('Should not be able to create a user', async () => {
    const email = 'guiteste@gmail.com';
    const password = '12345678';

    expect(
      await createUserService({ email, password })
        .then()
        .catch((_) => _),
    );
  });

  it('Should be able to list the users', async () => {
    const users = await userRepository.list();

    expect(users.length).toBeGreaterThan(0);
  });
});
