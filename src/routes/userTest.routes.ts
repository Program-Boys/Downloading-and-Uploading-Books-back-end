import { Router } from 'express';
import { createUserFactory } from '../models/User/CreateUser.factory';

const routes = Router();

routes.post('/user', (request, response) => {
  createUserFactory().handle(request, response);
});

export { routes };
