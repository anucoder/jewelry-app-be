const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const cartSchema = new Schema( {
    userEmail: {type : String},
    date: {type : String},
    productId : {type:Number},
    productName : {type:String},
    productPrice:{type:Number},
    productImage:{type:String},
    quantity:{type:Number}
  });

const cartModel = mongoose.model("cart",cartSchema,"cartItems");

module.exports = cartModel;