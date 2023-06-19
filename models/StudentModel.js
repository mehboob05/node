const mongoose =require("mongoose");
const {Schema} = mongoose;

const StudentSchema = new Schema({
    Name:{
        type:String,
        required:[true,"Please Provide Student Name"]
    },
    City:{
        type:String,
        required:[true,"Please Provide Student City Name"],
        enum:{
            values:['Lodhran','Bahawalpur'],
            message:'{VALUE} is not supported'
        }
    },
    Education:{
        type:String,
        required:[true,"Please Provide Student Education"]
    }
});

const StudentModel = mongoose.model('Student',StudentSchema);
module.exports = StudentModel