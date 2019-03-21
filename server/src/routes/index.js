import express from 'express';
import { User } from '../controllers';
import { middleware } from '../middlewares';

const router = express.Router();

router.post('/auth/users', middleware.validateUser, User.createUser);

export default router;
