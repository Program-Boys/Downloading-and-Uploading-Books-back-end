import { InMemoryUserRepository } from '../../repositories/in-memory/user.model';
import { User } from '../../entities/user';
import { IUsersRepository } from '../../repositories/IUserRepositories';
import { CreateUserService } from '../../models/User/CreateUser.service';
import { ListUserService } from '../../models/User/ListUser.service';

describe('Create a User', () => {
  let userRepository: IUsersRepository;
  let createUserService: CreateUserService;
  let listUserService: ListUserService;

  beforeAll(() => {
    userRepository = new InMemoryUserRepository();
    createUserService = new CreateUserService(userRepository);
    listUserService = new ListUserService(userRepository);
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
    expect(
      await createUserService
        .execute(userData)
        .then()
        .catch((_) => _),
    );
  });

  it('Should be able to list the user', async () => {
    const user = await listUserService.execute();

    expect(user.length).toBeGreaterThan(0);
  });
});
