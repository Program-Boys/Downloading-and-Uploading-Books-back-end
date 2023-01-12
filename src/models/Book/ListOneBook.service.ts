import { Book } from '../../entities/book';
import { IBooksRepository } from '../../repositories/IBooksRepositories';

interface IBookRequest {
  id: string | Book;
}

class ListOneBookService {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(id: string | Book) {
    const listOne = Book.listOne(id);

    const oneBook = await this.booksRepository.listOne(listOne);

    return oneBook;
  }
}

export { ListOneBookService };
