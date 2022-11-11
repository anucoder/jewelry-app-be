const express = require("express");

const router = express.Router();
const product = require("../Controllers/productsController");
const category = require("../controllers/categoryController")
// const user = require('../Controllers/UserController')
// const payment = require("../Controllers/PaymentController")

router.get("/", (request, response) => {
  response.status(200).send("Test");
}); // Default

//products
 router.get("/products/:cat_id", product.getProductList);
 router.get("/product-details/:id", product.getProductDetailsById);
 router.post("/products/filter",product.filterData)

//Category
router.get("/categories",category.getCategoryList);
// //User
// router.post('/api/sign-up',user.SignUp)
// router.post("/api/login",user.Login)

// //payment
// router.post("/api/payment/gen-order",payment.getOrderId)
// router.post("/api/payment/verify",payment.verifyPayment)

module.exports = router;
