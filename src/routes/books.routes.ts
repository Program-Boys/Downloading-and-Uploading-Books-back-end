import { Router } from "express";
import { BooksControllers } from "../controllers/Books/createBook.controller";

const routes = Router();
const booksControllers = new BooksControllers();

routes.post("", booksControllers.create);

export default routes;
