import express from 'express'
import client from '../../../controllers/clientController'
const router = express.Router();

router
.get('/client', client.findAll)
.post('/client', client.create)
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

