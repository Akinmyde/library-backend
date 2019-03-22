import express from 'express';

import Books from '../controllers/getbooks';

const router = express.Router();

router.get('/books', Books.getAllBooks);

export default router;
