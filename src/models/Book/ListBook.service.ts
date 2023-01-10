import { Book } from '../../entities/book';
import { IBooksRepository } from '../../repositories/IBooksRepositories';

class ListBookService {
  constructor(private booksRepository: IBooksRepository) {}

  async execute() {
    const listBooks = Book.list();
    const allBooks = await this.booksRepository.list(listBooks);

    return allBooks;
  }
}

export { ListBookService };
