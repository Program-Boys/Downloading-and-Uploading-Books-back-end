import { Request, Response } from 'express';
import { CreateBookService } from './CreateBook.service';

class CreateBookController {
  constructor(private createBook: CreateBookService) {}

  async handle(request: Request, response: Response) {
    const { name, gender } = request.body;
    const book = await this.createBook.execute({ name, gender });

    return response.json(book);
  }
}

export { CreateBookController };
