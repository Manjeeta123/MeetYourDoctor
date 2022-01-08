const mongoose=require("mongoose");

const bedSchema=new mongoose.Schema({
    tot_bed:{type:Number,min:0,required:true},
    booked_bed:{type:Number,required:true},
    av_bed:{type:Number,
            required:true
    }
 })

 module.exports=mongoose.model('beds',bedSchema);