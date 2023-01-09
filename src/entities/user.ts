const allUsers: User[] = [];

class User {
  id?: string;
  email: string;
  password: string;

  private constructor({ email, password }: User) {
    return Object.assign(this, {
      email,
      password,
    });
  }

  static create({ email, password }: User) {
    const user = new User({ email, password });
    allUsers.push(user);
    return user;
  }

  static list(): User[] {
    return allUsers;
  }
}

export { User };
