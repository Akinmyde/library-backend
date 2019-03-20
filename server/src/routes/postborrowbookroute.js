import express from 'express';
import { BorrowBook } from '../middlewares';
import { PostBorrowBook } from '../controllers';

const router = express.Router();
router.post('/borrow', BorrowBook.idValidation, BorrowBook.checkUserId, BorrowBook.checkBookId, PostBorrowBook.borrowBook);

export default router;
