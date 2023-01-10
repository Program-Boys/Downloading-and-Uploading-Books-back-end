import { Book } from '../../entities/book';
import { IBooksRepository } from '../../repositories/IBooksRepositories';

interface IBookRequest {
  name: string;
  gender: string;
}

class CreateBookService {
  constructor(private booksRepository: IBooksRepository) {}

  async execute({ name, gender }: IBookRequest) {
    if (name.length < 5) {
      throw new Error('Insert a name valid for the book');
    }

    let createdAt = new Date();
    let updatedAt = new Date();

    const bookCreate = Book.create({ name, gender, createdAt, updatedAt });
    const book = await this.booksRepository.create(bookCreate);

    return book;
  }
}

export { CreateBookService };
