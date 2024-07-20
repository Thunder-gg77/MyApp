//importing mongoose
var mongoose=require('mongoose');


//2.schema creation
var stuSchema =mongoose.Schema({

    s_name:String,
    s_age:Number,
    s_rollno:Number,
    s_place:String,
    s_dept:String,
});

//model creation
var stuModel = mongoose.model("student",stuSchema);
module.exports = stuModel;