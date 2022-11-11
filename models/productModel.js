const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productSchema = new Schema( {
    id: {type : Number},
    title: {type : String},
    description: {type : String},
    category: {type : Number},
    price : {type : Number},
    material : {type: Array},
    stones : {type:Array},
    image: {type: String},
    rating: { type:Object }
  });

const productModel = mongoose.model("product",productSchema,"Products");

module.exports = productModel;