//import express
var express = require ('express');
require('./connection');
var stuModel = require('./model/student');
var cors = require('cors');

//initalization
var app=express();
;


//middleware
app.use(express.json());
app.use(cors());
//api

app.post("/add",async(req,res)=>{
    try {
        await stuModel(req.body).save();
        res.send({message: "data added"})
    } catch (error) {
        console.log(error)
    }
});
//to view
app.get("/view",async(req,res)=>{
    try {
        var data= await stuModel.find();
        res.send(data);
    } catch (error) {
        console.log(error);
        
    }
});
//delete
app.delete('/remove/:id',async(req,res)=>{
    try {
        var id=req.params.id;
        await stuModel.findByDelete(id)
        res.send({message:'deleted sucessfully'})
    } catch (error) {
        console.log(error)
        
    }

})
//update
app.put('/edit/:id',async(req,res)=>{
    var id=await stuModel
    res.send({message:'updated sucessfully'})
    try {
        var data= await stuModel.findByUpdate(id,req.body);
        res.send({message:'updateed sucessfuly',data});
    } catch (error) {
       console.log(error) 
    }
})
//connecting to port
app.listen(3026,()=>{
    console.log("port is up and running!!")
});


