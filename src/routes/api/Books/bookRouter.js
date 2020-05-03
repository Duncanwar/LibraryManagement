import express from 'express'

const router = express.Router();

router
.get('/books',(req,res)=>{
    res.send("Get one book");
})
.post('/books',(req,res)=>{
    res.send("Enter books");
});
router
.get('/books/:id')
.delete('/books/:id', (req,res)=>{
    res.send("Delete a book")
})
.patch('/books/:id', (req,res)=>{
    res.send("patch a book")
})
.put('/books/:id', (req,res)=>{
    res.send("Update a book")
});
export default router;

