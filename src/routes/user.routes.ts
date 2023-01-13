import { Router } from 'express';
import { UserController } from '../controllers/User/User.controllers';
import verifyEmailMiddleware from '../middlewares/verifyEmail.middleware';

const routes = Router();
const userController = new UserController();

routes.post('', verifyEmailMiddleware, userController.create);
routes.get('', userController.list);
routes.post('/login', userController.login);

export default routes;
