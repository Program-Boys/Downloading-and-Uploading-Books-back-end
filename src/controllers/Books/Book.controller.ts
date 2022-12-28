import createBookService from '../../services/Books/createBook.service';
import listBooksService from '../../services/Books/listBooks.service';
import deleteBookService from '../../services/Books/deleteBook.service';
import { Request, Response } from 'express';

export class BooksControllers {
  async create(req: Request, res: Response) {
    const { name, gender } = req.body;

    const createdBook = await createBookService(req, {
      name,
      gender,
    });
    return res.status(201).json(createdBook);
  }

  async list(req: Request, res: Response) {
    const books = await listBooksService();

    return res.status(200).json(books);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteBookService({ id });

    return res.json({
      message: 'Book deleted',
    });
  }
}
