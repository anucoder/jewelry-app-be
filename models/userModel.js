const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema( {
    id: {type:Number},
    name: {type : String},
    email: {type : String},
  });

const userModel = mongoose.model("user",userSchema,"users");

module.exports = userModel;