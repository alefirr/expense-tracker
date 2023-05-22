import { Router } from 'express';
import {
  addUser,
  getAllUsers,
  getUserById,
  removeUser,
  updateUser,
} from '../controllers/user';

const router = Router();

router.post('/', addUser);
router.put('/:id', updateUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.delete('/:id', removeUser);

export default router;
