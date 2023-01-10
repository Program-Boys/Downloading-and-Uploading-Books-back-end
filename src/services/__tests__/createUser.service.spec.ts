import { InMemoryUserRepository } from '../../repositories/in-memory/user.model';
import { User } from '../../entities/user';
import { IUsersRepository } from '../../repositories/IUserRepositories';
import { CreateUserService } from '../../models/User/CreateUser.service';

describe('Create a User', () => {
  let userRepository: IUsersRepository;
  let createUserService: CreateUserService;

  beforeAll(() => {
    userRepository = new InMemoryUserRepository();
    createUserService = new CreateUserService(userRepository);
  });

  it('Should be able to create a user', async () => {
    const userData: User = {
      email: 'angela@gmail.com',
      password: '12345678',
    };

    const user = await createUserService.execute(userData);

    expect(user).toHaveProperty('id');
  });

  it('Should not be able to create a user', async () => {
    const userData: User = {
      email: 'guitest@gmail.com',
      password: '12345678',
    };

    await expect(createUserService.execute(userData)).rejects.toEqual(
      new Error('You are not admin'),
    );
  });
});
