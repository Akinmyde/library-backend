import express from 'express';
import getBookById from './getbookbyidroute';
import postBorrowBookroute from './postborrowbookroute';
import { BorrowedBook } from '../controllers';
import { middleware } from '../middlewares';

const router = express.Router();

router.use('/', getBookById);
router.use('/books', postBorrowBookroute);

const {
  checkParamsId, verifyId, checksIfUserExists, checksIfhistoryExist,
} = middleware;

router.get('/books/borrowed/:id', checkParamsId, verifyId, checksIfUserExists, checksIfhistoryExist, BorrowedBook.getById);

export default router;
