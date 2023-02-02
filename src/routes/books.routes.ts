import { Router } from 'express';
import { BooksControllers } from '../controllers/Books/Book.controller';
import { storage } from '../multerConfig';
import multer from 'multer';
import tokenAuthMiddleware from '../middlewares/tokenAuth.middleware';
import verifyNameGenderLength from '../middlewares/verifyNameGenderLength.middleware';

const upload = multer({ storage: storage });

const routes = Router();

routes.post(
  '',
  upload.single('Books'),
  tokenAuthMiddleware,
  BooksControllers.create,
);
routes.get('', BooksControllers.list);
routes.get('/:id', BooksControllers.listOneById);
routes.patch('/:id', verifyNameGenderLength, BooksControllers.patch);
routes.delete('/:id', tokenAuthMiddleware, BooksControllers.delete);

export default routes;
