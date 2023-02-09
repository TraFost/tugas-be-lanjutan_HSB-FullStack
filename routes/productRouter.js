const productController = require("../controllers/productController.js");

const router = require("express").Router();

// create products

router.post("/addProduct", productController.addProduct);

// get all products

router.get("/getAllProducts", productController.getAllProducts);

// get single product

router.get("/:id", productController.getSingleProduct);

// update product

router.put("/:id", productController.updateProduct);

// delete product

router.delete("/:id", productController.deleteProduct);

module.exports = router;
