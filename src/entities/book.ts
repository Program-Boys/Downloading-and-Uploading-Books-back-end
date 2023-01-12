import { User } from './user';

const allBooks: Book[] = [];

class Book {
  id?: string;
  name: string;
  gender: string;
  owner?: User;
  ownerId?: string | null;
  createdAt: Date;
  updatedAt: Date;
  bookFile?: string;

  private constructor({ name, gender }: Book) {
    return Object.assign(this, {
      name,
      gender,
    });
  }

  static create({ name, gender }: Book) {
    const book = new Book({
      name,
      gender,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    allBooks.push(book);
    return book;
  }

  static list(): Book[] {
    return allBooks;
  }

  static listOne(id: string | Book): Book {
    let findBook = allBooks.find((book) => book.id === id);

    findBook = findBook as Book;

    return findBook;
  }
}

export { Book };
