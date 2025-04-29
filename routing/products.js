const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");
const cartController = require("../controllers/cartController"); // <<-- bu üstte olacak!!

router.get("/", productsController.getProductsView);
router.get("/add", productsController.getAddProductView);
router.post("/add", cartController.addProductToCart); // <<-- burada kullanılıyor
router.get("/new", productsController.getNewProductView);
router.get("/:name", productsController.getProductView);
router.delete("/:name", productsController.deleteProduct);

module.exports = router;
