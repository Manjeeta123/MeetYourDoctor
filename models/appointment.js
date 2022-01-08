const mongoose=require("mongoose");
const doctor=require("./doctor");
const patient=require("./patient");

const appointmentSchema=new mongoose.Schema({
    appoint_number:{
        type:Number,
        required:true
    },
   
    patient_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:patient,
        required:true
    },
    doct_id:{   
        type:mongoose.Schema.Types.ObjectId,
        ref:doctor,
        required:true
    },
    date:{
        type:Date,
        default:Date.now(),
        required:true
    },
    appoint_status:{
        type:String,
        required:true
    },
    start_from:{
        type:Date,
        required:true
    },
      
    end_to:{
        type:Date,
        required:true
    }

})

module.exports=mongoose.model('appointment',appointmentSchema);
