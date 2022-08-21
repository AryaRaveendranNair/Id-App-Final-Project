const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/IdApp")
mongoose.connect("mongodb+srv://idappictak:V3X4oo7dzZ0kJls2@cluster0.qczdhu1.mongodb.net/IdApp" );

const Schema = mongoose.Schema;
const studentSchema = new Schema({
       
    name: String,
    email: String,
    phone: Number,
    photo: String,
    course:String,
    batch: String,
    startDate: String,
    endDate: String,
   status:String,
  
    

},
{
    versionKey: false
   });



var data = mongoose.model('datas' , studentSchema)
module.exports = data;