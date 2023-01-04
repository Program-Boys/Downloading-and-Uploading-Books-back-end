import { Router } from 'express';
import multer from 'multer';
import { BooksFilesController } from '../controllers/BooksFiles/booksFiles.controller';
import { storage } from '../multerConfig';

const upload = multer({ storage: storage });
const routes = Router();
const booksFilesController = new BooksFilesController();

routes.get('', booksFilesController.list);
routes.patch('/:id', upload.single('Books'), booksFilesController.updateFile);

export default routes;
