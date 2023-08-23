import { Router } from "express";
import { createMovie, deleteMovie, getMovies, getMoviesAndCategories, updateMovie } from "./controllers/MovieController.js";
import { createCategory, deleteCategory, getCategories, updateCategory } from "./controllers/CategoryController.js";

const routes = Router();

routes.get("/movies-categories", getMoviesAndCategories);
routes.get("/movies", getMovies);
routes.post("/movie", createMovie);
routes.delete("/movie/:id", deleteMovie);
routes.put("/movie/:id", updateMovie);

routes.get("/categories", getCategories);
routes.post('/category', createCategory);
routes.delete("/category/:id", deleteCategory);
routes.put("/category/:id", updateCategory);

export default routes;