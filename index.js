const express =require("express");
const app = express();
const mongoose = require('mongoose');
const StudentModel = require("./models/StudentModel")

//middleware used
app.use(express.json());

app.get("/students",async(req,res)=>{
  console.log("working");
  // const student = await StudentModel.findById("648a9f5c58daf71068d55a56");  

  // show single  record usning json response
  // const student = await StudentModel.find({Name:"Mehboob"});
  // res.json({
  //   status:"true",
  //   student:student
  // })
  //show all record using json response
  const students = await StudentModel.find();
  res.json({
    status:true,
    students:students
  })
  
})
// create record using post method
app.post("/create-student",async(req,res)=>{
  const newStudent = req.body;
  await StudentModel.create(newStudent);
  res.json({
    status:true,
    msg:"Record Created Sucessfully.",
   
  })
})

//Read Record from database using id not working
app.get("/read-student/:id",async(req,res)=>{
 
})


//delete record from database
app.delete("/delete-student/:id",async(req,res)=>{
  const delid = req.params.id;
  await StudentModel.findByIdAndDelete(delid); 
  res.json({
    status:true,
    msg:"Record delete Sucessfully."
  })
})

//update record not owrking
app.put("/update-student/:id",async(req,res)=>{
  const updateid = req.params.id;
  await StudentModel.findByIdAndUpdate(updateid);
  res.json({
    status:true,
    msg:"Record update Sucessfully."
  })
})
mongoose.connect('mongodb://127.0.0.1:27017/studentDbM').then(()=>{
    app.listen(3004,()=>{
        console.log("Database and server Running");
    })  
})

