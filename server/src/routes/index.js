import express from 'express';
import getBookById from './getbookbyidroute';
import postBorrowBookroute from './postborrowbookroute';

const router = express.Router();

router.use('/', getBookById);
router.use('/books', postBorrowBookroute);

export default router;
