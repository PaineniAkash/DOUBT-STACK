import express from 'express';
import {
  getDoubts,
  getDoubtById,
  createDoubt,
  updateDoubt,
  deleteDoubt,
  resolveDoubt,
  voteDoubt,
  followDoubt
} from '../controllers/doubt.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/upload.middleware.js';
import { 
  createDoubtValidation, 
  updateDoubtValidation,
  voteValidation 
} from '../middleware/validation.middleware.js';

const router = express.Router();

// Public routes
router.get('/', getDoubts);
router.get('/:id', getDoubtById);

// Protected routes
router.post('/', protect, upload.array('attachments', 5), createDoubtValidation, createDoubt);
router.put('/:id', protect, updateDoubtValidation, updateDoubt);
router.delete('/:id', protect, deleteDoubt);
router.put('/:id/resolve', protect, resolveDoubt);
router.post('/:id/vote', protect, voteValidation, voteDoubt);
router.post('/:id/follow', protect, followDoubt);

export default router;
