
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


const departmentSchema=new mongoose.Schema({
    dept_name:{
        type:String,
        required:true
    }
})

const bedSchema=new mongoose.Schema({
   tot_bed:{type:Number,min:0,required:true},
   booked_bed:{type:Number,required:true},
   av_bed:{type:Number,
           required:true
   }
})

const patient=mongoose.model('patient',patientSchema);
const department=mongoose.model('department',departmentSchema);
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
    email:{
        type:String,
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

const doctor=mongoose.model('doctor',doctorSchema);
const bed=mongoose.model('beds',bedSchema);

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

const emergency_doct=mongoose.model('emergency_doct',emergencySchema);

// appointment schema

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

const appointment=mongoose.model('doctor',appointmentSchema);

// doctor availability schema

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

const doct_avail=mongoose.model('doctor',docavailSchema);

module.exports= {patient , doctor,department,bed,emergency_doct,appointment,doct_avail};
