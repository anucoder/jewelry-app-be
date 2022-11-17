const express = require("express");

const router = express.Router();
const product = require("../controllers/productsController");
const category = require("../controllers/categoryController")
const cart = require('../controllers/cartController');
const cartModel = require("../models/cartModel");
// const user = require('../controllers/UserController')
// const payment = require("../controllers/PaymentController")

router.get("/", (request, response) => {
  response.status(200).send("Test");
}); // Default

//products
 router.get("/products/:cat_id", product.getProductList);
 router.get("/product-details/:id", product.getProductDetailsById);
 router.post("/products/filter",product.filterData)


//Category
router.get("/categories",category.getCategoryList);

//Cart
router.post("/cart/new-item",cart.addItemtoCart)
router.post("/cart/items",cart.getItemsbyEmail)
router.post("/cart/update-qty",cart.updateItemQuantity)
router.post("/cart/get-qty",cart.getItemQuantity)
// //User
// router.post('/api/sign-up',user.SignUp)
// router.post("/api/login",user.Login)

// //payment
// router.post("/api/payment/gen-order",payment.getOrderId)
// router.post("/api/payment/verify",payment.verifyPayment)

module.exports = router;
