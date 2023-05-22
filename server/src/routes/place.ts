import { Router } from 'express';
import {
  addPlace,
  getAllPlaces,
  getPlaceById,
  removePlace,
  updatePlace,
} from '../controllers/place';

const router = Router();

router.post('/', addPlace);
router.put('/:id', updatePlace);
router.get('/', getAllPlaces);
router.get('/:id', getPlaceById);
router.delete('/:id', removePlace);

export default router;
