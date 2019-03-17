import express from 'express';
import { Users } from '../controllers';
import { middleware } from '../middlewares';

const router = express.Router();

router.post('/auth/users', middleware.validateUser, Users.createUser);

export default router;
