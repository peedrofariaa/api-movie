import Movie from "../models/movie.js";
import Category from "../models/category.js"

export const getMovies = async (request, response) => {
    const movies = await Movie.find()

    return response.status(200).json(movies)
};

export const getMoviesAndCategories = async (request, response) => {
    const movies = await Movie.find()
    const categories = await Category.find()

    return response.status(200).json({movies, categories})
};

export const createMovie = async (request, response) => {
    const movie = request.body;
    const newMovie = await Movie.create(movie);

    return response.status(201).json(newMovie)
};

export const deleteMovie = async (request, response) => {
    const { id } = request.params;

    await Movie.findByIdAndDelete({ _id: id })
    return response.status(200).json({ response: "Movie deleted" })
};

export const updateMovie = async (request, response) => {
    const { id } = request.params;
    const updateMovie = request.body;

    await Movie.findByIdAndUpdate({ _id: id }, updateMovie)
    return response.status(201).json({ response: "Movie updated" })
};