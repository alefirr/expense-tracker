import Record from '../models/record';

import { Request, Response } from 'express';

export const addRecord = async (req: Request, res: Response) => {
  try {
    const { name, date, sum, category, place, user } = req.body;
    const isAdded = await Record.findOne({ name });

    if (isAdded) {
      return res.status(400).json({ message: 'This recordalready exists' });
    }

    const newRecord = new Record({
      name,
      date,
      sum,
      category,
      place,
      user,
    });

    await newRecord.save();

    res.json(newRecord);
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during adding record',
      e: (e as Error).message,
    });
  }
};

export const updateRecord = async (req: Request, res: Response) => {
  try {
    const { name, id } = req.body;
    const record = await Record.findById(id);
    if (record) {
      record.name = name;

      await record.save();
      return res.json(record);
    }
    res.status(400).json({ message: 'No such record' });
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during updating record',
      e: (e as Error).message,
    });
  }
};

export const getAllRecords = async (req: Request, res: Response) => {
  try {
    const records = await Record.find();
    if (!records) {
      return res.status(400).json({ message: 'No records' });
    }
    res.json(records);
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during getting records',
      e: (e as Error).message,
    });
  }
};

export const getRecordById = async (req: Request, res: Response) => {
  try {
    const record = await Record.findById(req.params.id);
    if (!record) {
      return res.status(400).json({ message: 'No such record' });
    }
    res.json(record);
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during getting record',
      e: (e as Error).message,
    });
  }
};

export const removeRecord = async (req: Request, res: Response) => {
  try {
    const record = await Record.findByIdAndDelete(req.params.id);
    if (!record) {
      return res.status(400).json({ message: 'No such record' });
    }

    res.json({ message: 'Recordwas deleted' });
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during removing record',
      e: (e as Error).message,
    });
  }
};
