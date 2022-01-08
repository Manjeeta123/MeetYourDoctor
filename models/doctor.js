const mongoose = require('mongoose');
const department = require('./department')


const doctorSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
   
    dob:{
        type:String,
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
    dept_id:{   
        type:mongoose.Schema.Types.ObjectId,
        ref:department,
        required:true
    },
    address:{
        type:String,
        required:true
    }
    

})

module.exports =mongoose.model('doctor',doctorSchema);
