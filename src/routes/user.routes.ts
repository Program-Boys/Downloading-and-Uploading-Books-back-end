import { Router } from 'express';
import { UserController } from '../controllers/User/User.controllers';
import verifyEmailMiddleware from '../middlewares/verifyEmail.middleware';

const routes = Router();

routes.post('', verifyEmailMiddleware, UserController.create);
routes.get('', UserController.list);
routes.post('/login', UserController.login);

export default routes;
