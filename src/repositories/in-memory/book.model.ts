import { Book } from '../../entities/book';
import { IBooksRepository } from '../IBooksRepositories';
import { randomUUID } from 'crypto';

class InMemoryBookRepository implements IBooksRepository {
  public books: Book[] = [];

  async create(book: Book): Promise<Book> {
    Object.assign(book, {
      id: randomUUID(),
    });
    this.books.push(book);
    return book;
  }

  async list() {
    return this.books;
  }
}

export { InMemoryBookRepository };
