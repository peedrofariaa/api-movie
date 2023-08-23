import Category from "../models/category.js";

export const getCategories = async (request, response) => {
    const categories = await Category.find()

    return response.status(200).json(categories)
};

export const createCategory = async (request, response) => {
    const category = request.body;
    const newCategory = await Category.create(category);

    return response.status(201).json(newCategory)
};

export const deleteCategory = async (request, response) => {
    const { id } = request.params;

    await Category.findByIdAndDelete({ _id: id })
    return response.status(200).json({ response: "Category deleted" })
};

export const updateCategory = async (request, response) => {
    const { id } = request.params;
    const updateCategory = request.body;

    await Category.findByIdAndUpdate({ _id: id }, updateCategory)
    return response.status(201).json({ response: "Category updated" })
};