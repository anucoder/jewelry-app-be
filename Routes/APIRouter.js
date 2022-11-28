const express = require("express");

const router = express.Router();
const product = require("../controllers/productsController");
const category = require("../controllers/categoryController")
const cart = require('../controllers/cartController');
const payment = require("../controllers/paymentController")

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
router.post("/cart/delete-item",cart.deleteItem)
router.post("/cart/empty-cart",cart.emptyCart)
// //User


// //payment
router.post("/api/payment/gen-order",payment.getOrderId)
router.post("/api/payment/verify",payment.verifyPayment)

module.exports = router;
