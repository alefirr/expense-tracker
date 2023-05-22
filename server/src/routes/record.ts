import { Router } from 'express';
import {
  addRecord,
  getAllRecords,
  getRecordById,
  removeRecord,
  updateRecord,
} from '../controllers/record';

const router = Router();

router.post('/', addRecord);
router.put('/:id', updateRecord);
router.get('/', getAllRecords);
router.get('/:id', getRecordById);
router.delete('/:id', removeRecord);

export default router;
