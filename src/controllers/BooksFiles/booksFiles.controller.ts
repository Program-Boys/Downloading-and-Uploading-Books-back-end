import { Request, Response } from 'express';
import patchBookFileService from '../../services/Books/patchBookFile.service';
import listBooksFilesService from '../../services/BooksFiles/listBooksFilesService.service';

export class BooksFilesController {
  async list(req: Request, res: Response) {
    const booksFiles = await listBooksFilesService();

    return res.status(200).json(booksFiles);
  }

  async updateFile(req: Request, res: Response) {
    const { id } = req.params;
    const { originalName, filename } = req.body;
    const updatedBookFiles = await patchBookFileService(req, {
      originalName,
      filename,
      id,
    });

    return res.status(202).json(updatedBookFiles);
  }
}
