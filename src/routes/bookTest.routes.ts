import { Router } from 'express';
import { createBookFactory } from '../models/Book/CreateBook.factory';

const routes = Router();

routes.post('/book', (request, response) => {
  createBookFactory().handle(request, response);
});

export { routes };
