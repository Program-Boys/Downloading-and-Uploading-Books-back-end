import express from 'express';
import routes from './routes/books.routes';
import routesUser from './routes/user.routes';

const app = express();
app.use(express.json());

app.use('/books', routes);
app.use('/user', routesUser);

export default app;
