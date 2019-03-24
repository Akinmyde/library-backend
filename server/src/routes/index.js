import express from 'express';
import getBookById from './getbookbyidroute';
import postBorrowBookroute from './postborrowbookroute';
import { BorrowedBook } from '../controllers';
import { middleware } from '../middlewares';
import getBooks from './getbooks';
import bookValidation from '../middlewares/validations/postBook';
import bookController from '../controllers/postBook';

const router = express.Router();

router.use('/', getBookById);
router.use('/books', postBorrowBookroute);
router.use('/', getBooks);


const {
  checkParamsId, verifyId, checksIfUserExists, checksIfhistoryExist,
} = middleware;

router.get('/books/borrowed/:id', checkParamsId, verifyId, checksIfUserExists, checksIfhistoryExist, BorrowedBook.getById);
router.post('/bookss', bookValidation, bookController.post);

export default router;
