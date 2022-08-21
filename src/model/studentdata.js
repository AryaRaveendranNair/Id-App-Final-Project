const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/IdApp")
mongoose.connect("mongodb+srv://idappictak:V3X4oo7dzZ0kJls2@cluster0.qczdhu1.mongodb.net/IdApp" );

const Schema = mongoose.Schema;
const StudentSchema = new Schema({

    studentname:String,
    email : String,
    gender : String,
    dob: String,
    username:String,
    password:String,
    course :String,
    batch : String,
    phonenumber:Number,
    profilepicture:Buffer,
    code:Number,
    

});

var studentdata = mongoose.model('studentdatas' , StudentSchema)
module.exports =studentdata