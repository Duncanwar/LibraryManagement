import express from 'express'

const router = express.Router();

router
.get('/client',(req,res)=>{
    res.send("Get one client");
})
.post('/client',(req,res)=>{
    res.send("Enter client");
});
router
.get('/client/:id', (req,res)=>{
    res.send('Client ')
})
.delete('/client/:id', (req,res)=>{
    res.send("Delete a client")
})
.patch('/books/:id', (req,res)=>{
    res.send("patch a client")
})
.put('/books/:id', (req,res)=>{
    res.send("update a client")
});
export default router;

