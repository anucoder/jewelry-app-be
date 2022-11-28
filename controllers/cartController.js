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

module.exports.updateItemQuantity = async (request,response) =>{
  let {email,id,quantity} = request.body;
  try{
  let result = await cartModel.updateOne({userEmail:email,productId:id},{$set:{quantity:quantity}})

  if(result){
      response.status(200).send({
        status : true,
        result
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

module.exports.deleteItem = async (request,response) =>{
  let {email,id} = request.body;
  try{
  let result = await cartModel.deleteOne({userEmail:email,productId:id})

  if(result){
      response.status(200).send({
        status : true,
        result
      });
    }else if(result.deletedCount==0){
      response.status(200).send({
        status : false,
        message:"item not deleted"
      });
    } else{
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

module.exports.emptyCart = async (request,response) =>{
  let {email} = request.body;
  try{
  let result = await cartModel.deleteMany({userEmail:email})

  if(result){
      response.status(200).send({
        status : true,
        result
      });
    }else if(result.deletedCount==0){
      response.status(200).send({
        status : false,
        message:"item not deleted"
      });
    } else{
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

module.exports.getItemQuantity = async (request,response) =>{
  let {email,id} = request.body;
  try{
  let quantity = await cartModel.findOne({userEmail:email,productId:id},{quantity:1})

  if(quantity){
      response.status(200).send({
        status : true,
        quantity
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