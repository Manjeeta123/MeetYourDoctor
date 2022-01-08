const mongoose=require("mongoose");
const doctor=require("./doctor");
const emergencySchema=new mongoose.Schema({
    doct_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:doctor,
        required:true
 
    } ,
    is_active:{
        type:Boolean,
        required:true
    }
 })
 
 module.exports=mongoose.model('emergency_doct',emergencySchema);
 