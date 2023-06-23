const express =require("express");
const app = express();
const fs = require("fs");
const mongoose = require('mongoose');
const StudentModel = require("./models/StudentModel")
const multer = require('multer');
const upload = multer({dest:'uploads/'});
const cors = require("cors");
const path =require('path');
//middleware used
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(path.resolve(),"uploads")));
// file upload
// app.post("/upload-image",upload.single('image'),async(req,res)=>{

//   let ext = req.file.mimetype.split("/")[1];
//   console.log(ext);

//   if(ext == "jpeg"|| ext == "gif"|| ext == "jpg"|| ext == "png" || ext == "plain"){
//     if(ext == "plain"){
//       ext = "txt";
//     }
//     fs.rename(req.file.path, req.file.path + "."+ ext,()=>{console.log("done")})
//     return res.json({
//       status: "OK"
//     })
//   } else {
//     fs.unlink(req.file.path,()=>{console.log("deleted")})
//     return res.json({
//       status:"Not Allowed",
//     })
//   }
// })





// find/search all records
app.get("/students",async(req,res)=>{
 try{
  const students = await StudentModel.find();
  return res.json({
    status:true,
    students:students
  })
 } catch{
  return res.json({
    status:false,
    msg:"Something went wrong"
  })
 }
 
  
})
// read record by id
app.get("/student/:id",async(req,res)=>{
  const readstudent = req.params.id;
  console.log(readstudent)
  try{
  
    const readstd = await StudentModel.findById(readstudent);
    return res.json({
      status:true,
      msg:"Record Read Successfully",
      students:readstd
    })
  }
  catch {
    return res.json({
      status:false,
      msg:"Something went wrong"
    })
  }
 
})
// create record using post method
app.post("/create-student", upload.single('image'), async (request, response) => {




  if (request.file.mimetype == "image/png" || request.file.mimetype == "image/jpg" || request.file.mimetype == "image/jpeg" || request.file.mimetype == "image/gif") {
    let ext = request.file.mimetype.split("/")[1];
    const NewImgName = request.file.path + "." + ext;
    request.body.image = NewImgName;
    fs.rename(request.file.path, NewImgName, () => { console.log("done") });

  } else {
    fs.unlink(request.file.path, () => { console.log("deleted") });
  }

  try {
    await StudentModel.create(request.body);
    return response.json({
      "status": true
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};

      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });

      return response.json({
        "status": false,
        errors: errors
      })
    }
  }
})


//delete record from database
app.delete("/delete-student/:id",async(req,res)=>{
  const delid = req.params.id;
  try{
    await StudentModel.findByIdAndDelete(delid); 
    return res.json({
      status:true,
      msg:"Record delete Sucessfully."
    })
  } catch{
     return res.json({
      status:false,
      msg:"not deleted."
  }
  
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

