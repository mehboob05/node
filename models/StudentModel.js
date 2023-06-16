const mongoose =require("mongoose");
const {Schema} = mongoose;

const StudentSchema = new Schema({
    Name:{
        type:String
    },
    City:{
        type:String
    },
    Education:{
        type:String
    }
});

const StudentModel = mongoose.model('Student',StudentSchema);
module.exports = StudentModel