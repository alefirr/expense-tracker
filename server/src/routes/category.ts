import { Router } from 'express';
import {
  addCategory,
  getAllCategories,
  getCategoryById,
  removeCategory,
  updateCategory,
} from '../controllers/category';

const router = Router();

router.post('/', addCategory);
router.put('/:id', updateCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.delete('/:id', removeCategory);

export default router;
