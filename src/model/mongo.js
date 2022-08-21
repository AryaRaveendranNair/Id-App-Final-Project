const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/IdApp")

mongoose.connect("mongodb+srv://idappictak:V3X4oo7dzZ0kJls2@cluster0.qczdhu1.mongodb.net/IdApp" );
const schema =mongoose.Schema;
const blogschema = new schema({
    name:String,
    ID:String,
    Email:String,
    Password:String,
    Course:String,
    Batch:String,
});
var blog =mongoose.model("admin",blogschema);
module.exports=blog;