import { IBooksRepository } from '../../repositories/IBooksRepositories';
import { CreateBookService } from '../../models/Book/CreateBook.service';
import { InMemoryBookRepository } from '../../repositories/in-memory/book.model';
import { Book } from '../../entities/book';

describe('Create a Book', () => {
  let bookRepository: IBooksRepository;
  let createBookService: CreateBookService;

  beforeAll(() => {
    bookRepository = new InMemoryBookRepository();
    createBookService = new CreateBookService(bookRepository);
  });

  it('Should be able to create a book', async () => {
    const bookData: Book = {
      name: 'teste',
      gender: 'testando',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const book = await createBookService.execute(bookData);

    expect(book).toHaveProperty('id');
  });

  it('Should not be able to create a book', async () => {
    const bookData: Book = {
      name: 'test',
      gender: 'testando',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await expect(createBookService.execute(bookData)).rejects.toEqual(
      new Error('Insert a name valid for the book'),
    );
  });
});
