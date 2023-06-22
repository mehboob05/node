const mongoose =require("mongoose");
const {Schema} = mongoose;

const StudentSchema = new Schema({
    name:{
        type:String,
        required:[true,"Please Provide Student Name"]
    },
    image:{
        type:String,
        required:[true,"Please Provide Student Image"],
        },
    email:{
        type:String,
        required:[true,"Please Provide Student Email"],
        },
   
    address:{
        type:String,
        required:[true,"Please Provide Student Address"]
    },
    about:{
        type:String,
        required:[true,"Please Provide Student About"]
    },
});

const StudentModel = mongoose.model('Student',StudentSchema);
module.exports = StudentModel