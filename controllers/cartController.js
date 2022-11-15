const cartModel = require('../models/cartModel');

module.exports.addItemtoCart = async (request,response) =>{
    let data = request.body;
    try{
    let newItem = new cartModel({
        userEmail: data.email,
        date: data.date,
        productId : data.id,
        productName : data.title,
        productPrice:data.price,
        productImage:data.image,
        quantity:data.quantity

    });
    let result = await newItem.save();

    response.status(200).send({
      status: true,
      result,
    });
  } catch (error) {
    response.status(500).send({
      status: false,
      error,
    });
  }
}

module.exports.getItemsbyEmail = async (request,response) =>{
    let email = request.body.email;
    try{
    let items = await cartModel.find({userEmail:email})

    if(items){
        response.status(200).send({
          status : true,
          items
        });
      }else{
        response.status(200).send({
          status : false,
          message:"items not found"
        });
      } 
  } catch (error) {
    response.status(500).send({
      status: false,
      error,
    });
  }
}