import { Router } from 'express';
import { BooksControllers } from '../controllers/Books/Book.controller';
import { storage } from '../multerConfig';
import multer from 'multer';
import tokenAuthMiddleware from '../middlewares/tokenAuth.middleware';

const upload = multer({ storage: storage });

const routes = Router();
const booksControllers = new BooksControllers();

routes.post(
  '',
  upload.single('Books'),
  tokenAuthMiddleware,
  booksControllers.create,
);
routes.get('', booksControllers.list);
routes.get('/:id', booksControllers.listOneById);
routes.delete('/:id', tokenAuthMiddleware, booksControllers.delete);

export default routes;
