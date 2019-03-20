import express from 'express';
import bookMiddlewares from '../middlewares';
import bookControllers from '../controllers';

const router = express.Router();

router.get('/books/:id', bookMiddlewares.validateId, bookMiddlewares.checkForBook, bookControllers.getBookById);

export default router;
