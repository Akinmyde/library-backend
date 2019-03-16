import express from 'express';
import { Book } from '../middlewares';
import { getBook } from '../controllers';

const router = express.Router();

router.get('/books/:id', Book.validateId, Book.checkForBook, getBook.getBookById);

export default router;
