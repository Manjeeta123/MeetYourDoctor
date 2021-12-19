
const express= require('express');
const mongoose=require("mongoose");
const { patient,doctor,department,bed,emergency_doct,appointment,doct_avail } = require('../database/models');
const router= express.Router();
const ObjectId = require('mongodb').ObjectId;



router.get("/",function(req,res){
    res.send("<h1>hello local world</h1>");
});
router.get("/about",function(req,res){
        res.send("<h1>   come after authentication</h1>");
    
});
router.get("/register",function(req,res){
    res.send("<h1>hello register  world</h1>");
});
router.get("/signin",function(req,res){
    res.send("<h1>hello signin world</h1>");
});
router.get("/contact",function(req,res){
    res.send("<h1>hello contact world</h1>");
});


//------>patient register post request-------->

router.post("/register" ,function(req,res){
       const {fname,lname,number,address,age,gender,disease}=req.body;
       console.log(req.body);
       if(!fname || !lname ||  !number || !address || !age || !gender || !disease  ){
        return res.status(422).json({error:"plz fill all details . "});
       }
       else {
             patient.findOne({number:number},function(err,founddoc){
                 if(err){
                     console.log(err);
                     return res.status(422).json({error:"Already present  . "});
                 }else{
                     if(founddoc) res.send("patient already present with this registered mobile number .");
                    else {
                        const newpatient=new patient({fname,lname,age,number,gender,address,disease });
                         newpatient.save(function(err){
                             if(err){
                                 console.log(err);
                             }else{
                                return res.status(200).json({message:"done "});
                             }
                         });
                    }
                    }
             });
       }
});


//--------> doctor add post request------------->

router.post("/adddoc" ,function(req,res){
    const {fullname,dob,number,gender,address,deptname}=req.body;
    if(!fullname ||  !number || !address || !dob || !gender || !deptname ){
     return res.status(422).json({error:"plz fill all details . "});
    }
    else {
          doctor.findOne({number:number},function(err,founddoc){
              if(err){
                  console.log(err);
                  return res.status(422).json({error:"Already present  . "});
              }else{
                  if(founddoc) res.send("doctor already present with this registered mobile number .");
                 else {

                    department.findOne({dept_name:deptname},function(e,doc){
                       if(!e){  
                            if(doc){
                                 const dept_id = new ObjectId(doc._id);
                                 const newdoctor=new doctor({fullname,dob,number,gender,dept_id,address });
                                 newdoctor.save(function(er){
                                 if(er){
                                     console.log("not save");
                                       }else{
                                           return res.status(200).json({message:"done "});
                                            }
                                  });   
                               }
                            }               
                    });
                   }
                 }
          });
    }
});



//-------------> post to department------------>

router.post("/adddepartment", function(req,res){
    const dept_name=req.body.dname;
    if(!dept_name){
        return res.status(422).json({error:"plz fill department name . "});
    }else{
        const newdept=new department({
            dept_name:dept_name
        });
        newdept.save(function(err){
            if(!err){
                return res.status(200).json({message:"done . "});
            }
        })
    }
});

//-------------------> post emergency doctor --------------->

router.post("/addemergency" , function(req,res){
    const {email,number}=req.body;
    if(!email || !number){
        res.status(422).json({error:"please fill the details"});
    }else {
        doctor.findOne({$and:[{email:email},{number:number}]}, function(err,doc){
            if(err){
                console.log(err);
            }else if (doc){
                const doctorid= doc.id;
                const newemergency= new emergency_doct({
                    doct_id:doctorid,
                    is_active:true
                });
                newemergency.save(function(err){
                    if(!err){
                        return res.status(200).json({message:"new emergency doctor added"});
                    }
            });
        } else{
            res.status(422).json({error:"invalid credentials/doctor with these credentials are not present"});
              }
       });
    }
});


module.exports=router;
