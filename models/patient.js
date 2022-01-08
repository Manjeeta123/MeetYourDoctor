const mongoose= require("mongoose");

const patientSchema= new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    disease:{
        type:String,
       
    }
  
   
})

module.exports=mongoose.model('patient',patientSchema);