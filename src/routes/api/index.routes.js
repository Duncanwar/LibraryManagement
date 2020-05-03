import express from 'express'
import auth from './autho/authRoutes'
import profile from './profile/profileRoutes'
import book from './Books/bookRouter'
import client from './client/clientRouter'
const router = express.Router();

router.use(auth);
router.use(book);
router.use(client);
router.use(profile);


export default router;