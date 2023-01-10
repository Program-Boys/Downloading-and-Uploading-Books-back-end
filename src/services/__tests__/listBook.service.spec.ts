import { IBooksRepository } from '../../repositories/IBooksRepositories';
import { ListBookService } from '../../models/Book/ListBook.service';
import { InMemoryBookRepository } from '../../repositories/in-memory/book.model';
import { Book } from '../../entities/book';
import { CreateBookService } from '../../models/Book/CreateBook.service';

describe('List the books', () => {
  let bookRepository: IBooksRepository;
  let listBookService: ListBookService;
  let createBookService: CreateBookService;

  beforeAll(() => {
    bookRepository = new InMemoryBookRepository();
    listBookService = new ListBookService(bookRepository);
    createBookService = new CreateBookService(bookRepository);
  });

  it('Should be able to list the books', async () => {
    const bookData: Book = {
      name: 'teste',
      gender: 'testando',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await createBookService.execute(bookData);

    const books = await listBookService.execute();

    expect(books.length).toBeGreaterThan(0);
  });
});
