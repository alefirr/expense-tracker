import Category from '../models/category';

import { Request, Response } from 'express';

export const addCategory = async (req: Request, res: Response) => {
  try {
    const { name, info, records } = req.body;
    const isAdded = await Category.findOne({ name });

    if (isAdded) {
      return res.status(400).json({ message: 'This category already exists' });
    }

    const newCategory = new Category({
      name,
      info,
      records,
    });

    await newCategory.save();

    res.json(newCategory);
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during adding category',
      e: (e as Error).message,
    });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { name, id } = req.body;
    const category = await Category.findById(id);
    if (category) {
      category.name = name;

      await category.save();
      return res.json(category);
    }
    res.status(400).json({ message: 'No such category' });
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during updating category',
      e: (e as Error).message,
    });
  }
};

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    if (!categories) {
      return res.status(400).json({ message: 'No categories' });
    }
    res.json(categories);
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during getting categories',
      e: (e as Error).message,
    });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(400).json({ message: 'No such category' });
    }
    res.json(category);
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during getting category',
      e: (e as Error).message,
    });
  }
};

export const removeCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(400).json({ message: 'No such category' });
    }

    res.json({ message: 'Category was deleted' });
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during removing category',
      e: (e as Error).message,
    });
  }
};
