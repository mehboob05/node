const express =require("express");
const app = express();
const mongoose = require('mongoose');
const StudentModel = require("./models/StudentModel")

//middleware used
app.use(express.json());

app.get("/",async(req,res)=>{
  console.log("working");
  const student = await StudentModel.findById("648a9f5c58daf71068d55a56");  
  console.log(student);
})

mongoose.connect('mongodb://127.0.0.1:27017/studentDbM').then(()=>{
    app.listen(3004,()=>{
        console.log("Database and server Running");
    })  
})

