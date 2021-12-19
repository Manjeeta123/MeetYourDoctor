const dotenv=require('dotenv');
const mongoose =require('mongoose');
const express= require('express');
const app=express();

dotenv.config({path:"./config.env"});

app.use(express.urlencoded({ extended: true} ));
app.use(express.json());

require("./database/conn.js");

const {patient,doctor,department,bed,emergency_doct,appointment,doct_avail}= require('./database/models.js');

app.use(require('./route/auth.js'));


app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server is running");
    }
});
