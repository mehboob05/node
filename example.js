// for upload files 

const express =require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");
const StudentModel =require("./models/StudentModel");
const multer = require("multer");
const upload = multer({dest:"uploades/"});

app.use(express.json())

//file upload 

app.post("/upload-image",upload.single("image"),async(req,res)=>{
    let ext = req.file.mimetype.split("/")[1];
    console.log(ext);

    if(ext == "jpeg" || ext == "gif" || ext == "jpg" || ext == "png"|| ext == "plain"){
        if(ext == "plain"){
            ext = "txt";
        }
        fs.rename(req.file.path,req.file.path + "." + ext, ()=>{console.log("Done Task") })
            return res.json({
                status:"OK"
        })
    } else {
        fs.unlink(req.file.path, ()=>{console.log("Deleted")})
        return res.json({
            status:"Not Allowed",
        })
    }
})