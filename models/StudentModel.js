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
        get: linkUrl
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
},{toJSON :{getters:true}});

function linkUrl (image){
    return "http://localhost:3004/" +image;
}
const StudentModel = mongoose.model('Student',StudentSchema);
module.exports = StudentModel