import createBookService from '../../services/Books/createBook.service';
import { Request, Response } from 'express';

export class BooksControllers {
  async create(req: Request, res: Response) {
    try {
      const { name, gender } = req.body;

      const createdBook = await createBookService({ name, gender });
      return res.status(201).json(createdBook);
    } catch (error) {
      return res.status(400).json({
        error: 'You are not admin',
      });
    }
  }
}
