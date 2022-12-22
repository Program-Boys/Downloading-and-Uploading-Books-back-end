import { Router } from 'express';
import { UserController } from '../controllers/User/User.controllers';

const routes = Router();
const userController = new UserController();

routes.post('', userController.create);

export default routes;
