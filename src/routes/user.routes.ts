import { Router } from 'express';
import { UserController } from '../controllers/User/User.controllers';

const routes = Router();
const userController = new UserController();

routes.post('', userController.create);
routes.get('', userController.list);

export default routes;
