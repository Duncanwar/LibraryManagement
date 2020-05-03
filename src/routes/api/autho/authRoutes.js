import express from 'express';

const router = express.Router();

router
.get('/auth/signup', (req,res)=>{
    res.render('SignUP');
})
.post('/auth/signup', (req,res)=>{
    res.send('Where to post data');
})
.post('/auth/login', (req,res)=>{
    res.send("Where to login ");
})
export default router;