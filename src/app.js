const subscribers = require('./models/subscribers')
const express = require('express');
const app = express()


// Your code goes here
app.get("/subscribers",async (req,res)=>{
    res.send(await subscribers.find());
})


// app.get("/subscribers/names",async (re,req)=>{
//     const fullListOfSubscribers = await subscribers.find();
//     const mappedResults = fullListOfSubscribers.map(subscriber => ({
//         name : subscriber.name,
//         subscribedChannel : subscriber.subscribedChannel
//     }));

//     res.send(mappedResults);
// })


app.get("/subscribers/names",async (req,res)=>{
    const projectedResult = await subscribers.find().select({
        _id : false,
        subscribedDate : false,
        __v : false
        
    });
    res.send(projectedResult);
   
})


app.get("/subscribers/:id",async (req,res)=>{
    const idToSearch = req.params.id;
    try{
        const subscriberFound = await subscribers.findOne({_id:idToSearch});
        console.log(subscriberFound);
        if(subscriberFound==null){
            res.status(400).send({message:"Id not found"});
        }else{
            res.send(subscriberFound);
        }
    }catch(err){
        res.status(400).send({message: err.message})
    }
    
});





















module.exports = app;
