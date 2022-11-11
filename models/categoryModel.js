const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const categorySchema = new Schema( {
    id: {type : Number},
    name: {type : String},
    material : {type: Array},
    stones : {type:Array},
    image: {type: String},
  });

const categoryModel = mongoose.model("category",categorySchema,"Jewellry_Categories");

module.exports = categoryModel;