import { IBooksRepository } from '../../repositories/IBooksRepositories';
import { InMemoryBookRepository } from '../../repositories/in-memory/book.model';
import { Book } from '../../entities/book';
import { CreateBookService } from '../../models/Book/CreateBook.service';
import { ListOneBookService } from '../../models/Book/ListOneBook.service';

describe('List the books', () => {
  let bookRepository: IBooksRepository;
  let listOneBookService: ListOneBookService;
  let createBookService: CreateBookService;

  beforeAll(() => {
    bookRepository = new InMemoryBookRepository();
    listOneBookService = new ListOneBookService(bookRepository);
    createBookService = new CreateBookService(bookRepository);
  });

  it('Should be able to list one book', async () => {
    const bookData: Book = {
      name: 'teste',
      gender: 'testando',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const book = await createBookService.execute(bookData);

    let id: string = book.id!;

    const oneBook = await listOneBookService.execute(id);

    expect(oneBook).toBeInstanceOf(Book);
    expect(oneBook).toHaveProperty('id');
  });
});
