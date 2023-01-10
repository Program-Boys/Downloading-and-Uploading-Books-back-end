import { IUsersRepository } from '../../repositories/IUserRepositories';
import { ListUserService } from '../../models/User/ListUser.service';
import { InMemoryUserRepository } from '../../repositories/in-memory/user.model';
import { CreateUserService } from '../../models/User/CreateUser.service';
import { User } from '../../entities/user';

describe('List the user', () => {
  let userRepository: IUsersRepository;
  let listUserService: ListUserService;
  let createUserService: CreateUserService;

  beforeAll(() => {
    userRepository = new InMemoryUserRepository();
    listUserService = new ListUserService(userRepository);
    createUserService = new CreateUserService(userRepository);
  });

  it('Should be able to list the user', async () => {
    const userData: User = {
      email: 'angela@gmail.com',
      password: '12345678',
    };

    await createUserService.execute(userData);

    const theUser = await listUserService.execute();

    expect(theUser.length).toBeGreaterThan(0);
  });
});
