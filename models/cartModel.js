const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const cartSchema = new Schema( {
    id: {type : Number},
    userId: {type : Number},
    date: {type : Date},
    products : {type:Array}
  });

const cartModel = mongoose.model("cart",cartSchema,"cartItems");

module.exports = cartModel;