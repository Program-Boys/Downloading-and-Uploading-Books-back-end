import { Book } from '../entities/book';

interface IBooksRepository {
  create(book: Book): Promise<Book>;
  list(books: Book[]): Promise<Book[]>;
}
export { IBooksRepository };
