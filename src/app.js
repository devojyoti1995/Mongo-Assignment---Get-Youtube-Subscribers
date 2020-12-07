const subscribers = require('../src/models/subscribers.js')
const express = require('express');
const app = express()


// Your code goes here
app.get("/subscribers",(res,req)=>{
    subscribers.findAll;
})
app.get("/subscribers/:id",(res,req)=>{
    subscribers.findOne;
})
app.get("/subscribers/names",(res,req)=>{
    subscribers.find(subscribers).find(names);
})





















module.exports = app;
