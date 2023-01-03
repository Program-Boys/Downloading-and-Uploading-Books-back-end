import { Router } from 'express';
import { BooksFilesController } from '../controllers/BooksFiles/booksFiles.controller';

const routes = Router();
const booksFilesController = new BooksFilesController();

routes.get('', booksFilesController.list);

export default routes;
