const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/IdApp")
mongoose.connect("mongodb+srv://idappictak:V3X4oo7dzZ0kJls2@cluster0.qczdhu1.mongodb.net/IdApp" );

const Schema = mongoose.Schema;
const PasswordresetSchema = new Schema({

    email:String,
    

    

});

var passworddata = mongoose.model('passworddatas' , PasswordresetSchema);
module.exports =passworddata;