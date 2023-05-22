import User from '../models/user';

import { Request, Response } from 'express';

export const addUser = async (req: Request, res: Response) => {
  try {
    const { name, info } = req.body;
    const isAdded = await User.findOne({ name });

    if (isAdded) {
      return res.status(400).json({ message: 'This useralready exists' });
    }

    const newUser = new User({
      name,
      info,
    });

    await newUser.save();

    res.json(newUser);
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during adding user',
      e: (e as Error).message,
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, id } = req.body;
    const user = await User.findById(id);
    if (user) {
      user.name = name;

      await user.save();
      return res.json(user);
    }
    res.status(400).json({ message: 'No such user' });
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during updating user',
      e: (e as Error).message,
    });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(400).json({ message: 'No users' });
    }
    res.json(users);
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during getting users',
      e: (e as Error).message,
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({ message: 'No such user' });
    }
    res.json(user);
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during getting user',
      e: (e as Error).message,
    });
  }
};

export const removeUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(400).json({ message: 'No such user' });
    }

    res.json({ message: 'Userwas deleted' });
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during removing user',
      e: (e as Error).message,
    });
  }
};
