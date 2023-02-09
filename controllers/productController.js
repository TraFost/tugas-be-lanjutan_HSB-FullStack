const db = require("../models");

const Product = db.products;
const Review = db.reviews;

// main work

// create products

const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await Product.create(info);
  res.status(200).send(product);
  console.log(product);
};

// get all products

const getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.status(200).send(products);
  console.log(products);
};

// get single product

const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
  console.log(product);
};

// update product

const updateProduct = async (req, res) => {
  try {
    let id = req.params.id;

    const product = await Product.update(req.body, { where: { id: id } });

    res.status(200).send(product);
  } catch {
    res.status(500).send({
      message: "Error updating product with id=" + id,
    });
  }
};

// delete product

const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });

  res.status(200).send("Product deleted successfully");
};

module.exports = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
