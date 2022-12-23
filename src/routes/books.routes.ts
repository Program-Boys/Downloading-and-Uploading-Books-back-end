import { Router } from 'express';
import { BooksControllers } from '../controllers/Books/Book.controller';

const routes = Router();
const booksControllers = new BooksControllers();

routes.post('', booksControllers.create);
routes.get('', booksControllers.list);

export default routes;
