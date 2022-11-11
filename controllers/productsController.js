const productModel = require("../models/productModel");

module.exports.getProductList = async (req, res) => {
  let cat_id = req.params.cat_id;
  try {
    let productlist = await productModel.find({category:cat_id});
    if (productlist) {
      res.status(200).send({
        status: true,
        productlist,
      });
    } else {
      res.status(200).send({
        status: false,
        message: "No products available",
      });
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Server error " + error,
    });
  }
};

module.exports.getProductDetailsById = async (req, res) => {
  let id = req.params.id;
  try {
    let productDetails = await productModel.findOne({ _id: id });
    if (productDetails) {
      res.status(200).send({
        status: true,
        productDetails,
      });
    } else {
      res.status(200).send({
        status: false,
        message: "No details available",
      });
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Server error " + error,
    });
  }
};

//API for Restaurant List by Location ID
module.exports.getRestaurantListByLocId = async (request,response)=>{
  let locid = request.params.loc_id;
  try{
    let restaurantListByLoc = await RestaurantModel.find({location_id:locid});
    if(restaurantListByLoc){
      response.status(200).send({
        status : true,
        restaurantListByLoc
      });
    }else{
      response.status(200).send({
        status : false,
        message:"restaurant not found"
      });
    } 
  }catch{
      response.send(500).send({
      status:false,
      error,
      message : "Server error, Contact to admin"
    });
  }
};
// API for Restaurant search page with filters, sort and pagination as input parameters

module.exports.filterData = async (request,response)=>{

  let {category,rating,lcost,hcost,material,stones, sort, page } = request.body;

  let filter = {};
  if(sort===undefined) sort={price:1,rating:1};
  if(page===undefined) page=1;
  let no_of_records = 4;

  if(category !== undefined) filter["category"] = category;
  if(material!== undefined) filter["material"] = { $in: material };
  if(stones!== undefined) filter["stones"] = { $in: stones };
  if(rating !== undefined) filter["rating.rate"] = { $gte: rating};
  if (hcost !== undefined && lcost !== undefined)
    filter["price"] = { $gte: lcost, $lte: hcost };

  console.log(filter);
    let result = await productModel.find(filter).sort(sort);
    let pages = Math.ceil(result.length/4);
    let result_page = result.splice((page*4)-4,no_of_records)
    // let result_page = result
    if(result_page.length!=0){
      response.status(200).send({
        status: true,
        result_page,
        pages
      });
    }
    else{
      response.status(200).send({
        status: false,
        message:"No products to show. Modify search"
      });
    }
    
};