import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import api from './api/index.routes'

dotenv.config();
const router = express.Router();
const baseUrl = '/api/v1';
router.use(cors());

router.get('/api', (req,res)=>
res.status(200).send({
    message: "Server successfully set",
}));

// router.use(baseUrl,api);

export default router;