import express from 'express'
import Client from '../models/client.models';

const router = express.Router();

router.findAll=(req,res) => {
Client.getAll((err, data)=>{
    if(err)
    res.status(500).send({
        message: 
        err.message || 'Some error occured while retrieving customers.'
    });
    else
    res.send(data);
})
};

router.make=(req,res)=>{
    // Validate request
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty !"
        });
    }
// Create a Customer
const client = new Client({
    regNo : req.body.regNo,
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    phoneNumber : req.body.phoneNumber,
    emailAddress : req.body.emailAddress,
    clientCategory : req.body.clientCategory,
    photo : req.body.photo,
});

Client.create(client, (err, data)=>{
    if(err)
    res.status(500).send({
        message: 
        err.message || 'Some error occured while retrieving customers.'
    });
    else
    res.send(data);
});
};


export default router;