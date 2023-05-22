import Place from '../models/place';

import { Request, Response } from 'express';

export const addPlace = async (req: Request, res: Response) => {
  try {
    const { name, info, records } = req.body;
    const isAdded = await Place.findOne({ name });

    if (isAdded) {
      return res.status(400).json({ message: 'This place already exists' });
    }

    const newPlace = new Place({
      name,
      info,
      records,
    });

    await newPlace.save();

    res.json(newPlace);
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during adding place',
      e: (e as Error).message,
    });
  }
};

export const updatePlace = async (req: Request, res: Response) => {
  try {
    const { name, id } = req.body;
    const place = await Place.findById(id);
    if (place) {
      place.name = name;

      await place.save();
      return res.json(place);
    }
    res.status(400).json({ message: 'No such place' });
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during updating place',
      e: (e as Error).message,
    });
  }
};

export const getAllPlaces = async (req: Request, res: Response) => {
  try {
    const places = await Place.find();
    if (!places) {
      return res.status(400).json({ message: 'No places' });
    }
    res.json(places);
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during getting places',
      e: (e as Error).message,
    });
  }
};

export const getPlaceById = async (req: Request, res: Response) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) {
      return res.status(400).json({ message: 'No such place' });
    }
    res.json(place);
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during getting place',
      e: (e as Error).message,
    });
  }
};

export const removePlace = async (req: Request, res: Response) => {
  try {
    const place = await Place.findByIdAndDelete(req.params.id);
    if (!place) {
      return res.status(400).json({ message: 'No such place' });
    }

    res.json({ message: 'Place was deleted' });
  } catch (e) {
    res.status(400).json({
      message: 'Error occured during removing place',
      e: (e as Error).message,
    });
  }
};
