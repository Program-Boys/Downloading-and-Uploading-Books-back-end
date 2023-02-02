import { Router } from 'express';
import multer from 'multer';
import { BooksFilesController } from '../controllers/BooksFiles/booksFiles.controller';
import { storage } from '../multerConfig';

const upload = multer({ storage: storage });
const routes = Router();

routes.get('', BooksFilesController.list);
routes.patch('/:id', upload.single('Books'), BooksFilesController.updateFile);

export default routes;
