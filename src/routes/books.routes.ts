import { Router } from 'express';
import { BooksControllers } from '../controllers/Books/Book.controller';
import { storage } from '../multerConfig';
import multer from 'multer';

const upload = multer({ storage: storage });

const routes = Router();
const booksControllers = new BooksControllers();

routes.post('', upload.single('Books'), booksControllers.create);
routes.get('', booksControllers.list);

export default routes;
