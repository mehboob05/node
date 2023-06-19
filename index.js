const express =require("express");
const app = express();
const fs = require("fs");
const mongoose = require('mongoose');
const StudentModel = require("./models/StudentModel")
const multer = require('multer');
const upload = multer({dest:'uploads/'});
//middleware used
app.use(express.json());



// file upload
app.post("/upload-image",upload.single('image'),async(req,res)=>{

  let ext = req.file.mimetype.split("/")[1];
  console.log(ext);

  if(ext == "jpeg"|| ext == "gif"|| ext == "jpg"|| ext == "png" || ext == "plain"){
    if(ext == "plain"){
      ext = "txt";
    }
    fs.rename(req.file.path, req.file.path + "."+ ext,()=>{console.log("done")})
    return res.json({
      status: "OK"
    })
  } else {
    fs.unlink(req.file.path,()=>{console.log("deleted")})
    return res.json({
      status:"Not Allowed",
    })
  }
 res.json({
  status:"ok"
 })
})





// find/search all records
app.get("/students",async(req,res)=>{
  const students = await StudentModel.find();
  res.json({
    status:true,
    students:students
  })
  
})
// read record by id
app.get("/read-student/:id",async(req,res)=>{
  const readstudent = req.params.id;
  const readstd = await StudentModel.findById(readstudent);
  res.json({
    status:true,
    msg:"Record Read Successfully",
    students:readstd
  })
})
// create record using post method
app.post("/create-student",async(req,res)=>{
  const newStudent = req.body;
  try{
    await StudentModel.create(newStudent);
   return res.json({
      status:true,
      msg:"Record Created Sucessfully.",
     
    })
  } catch(error){
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });

      return res.json({
        "status": false,
        errors: errors
      })
    }
  }
 
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

//update record 
app.put("/update-student/:id",async(req,res)=>{
  const updateid = req.params.id;
  const upstd = req.body;
  await StudentModel.findByIdAndUpdate(updateid,upstd);
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

