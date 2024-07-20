//import mongoose
var mongoose = require("mongoose");

//connect with db
mongoose
.connect("mongodb+srv://blessytsunny:blessy@cluster0.r8isnwc.mongodb.net/sngce?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db");

})
.catch((err)=>console.log(err));