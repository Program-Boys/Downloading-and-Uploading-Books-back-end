import express from 'express';
import { handleErrors } from './errors/handleError';
import routes from './routes/books.routes';
import routesUser from './routes/user.routes';

let cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(handleErrors);
app.use('/books', routes);
app.use('/user', routesUser);

export default app;
