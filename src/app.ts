import express from "express";
import routes from "./routes/books.routes";

const app = express();
app.use(express.json());

app.use("/books", routes);

export default app;
