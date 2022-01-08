const dotenv=require('dotenv');
const mongoose =require('mongoose');
const express= require('express');
const app=express();

dotenv.config({path:"./config.env"});

app.use(express.urlencoded({ extended: true} ));
app.use(express.json());

require("./database/conn.js");

const patient=require("./models/patient.js");
const doctor=require("./models/doctor");
const department=require('./models/department');
const bed=require("./models/beds");
const emergency_doct=require("./models/emergdoctor");
const appointment=require("./models/appointment");
const doct_avail=require("./models/doctavail");

app.use(require('./route/auth.js'));


app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server is running");
    }
});
