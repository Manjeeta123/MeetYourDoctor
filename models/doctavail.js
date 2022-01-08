const mongoose=require("mongoose");
const doctor=require("./doctor");
const docavailSchema=new mongoose.Schema({
   
    doct_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:doctor,
        required:true
    },
   weeks:[],
    time_from:{
        type:Date,
        required:true
    },
      
    time_to:{
        type:Date,
        required:true
    },
    per_day_slot:{
        type:Number,
        required:true
    }

})

module.exports=mongoose.model('doct_avail',docavailSchema);
