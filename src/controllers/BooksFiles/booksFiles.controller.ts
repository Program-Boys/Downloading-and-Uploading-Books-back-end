import { Request, Response } from 'express';
import listBooksFilesService from '../../services/BooksFiles/listBooksFilesService.service';

export class BooksFilesController {
  async list(req: Request, res: Response) {
    const booksFiles = await listBooksFilesService();

    return res.status(200).json(booksFiles);
  }
}
