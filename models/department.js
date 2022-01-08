const mongoose=require("mongoose");

const departmentSchema=new mongoose.Schema({
    dept_name:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('department',departmentSchema);