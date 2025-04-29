const Product = require('../models/Product');
const Cart = require('../models/Cart');

exports.addProductToCart = (req, res) => {
  const { name, description, price } = req.body;

  try {
    console.log("🎯 price (gelen form verisi):", price);

    const normalizedPrice = Number(String(price).replace(',', '.'));
    console.log("✅ normalizedPrice (sayıya çevrilmiş):", normalizedPrice);

    const newProduct = new Product(name, description, normalizedPrice);
    console.log("🆕 newProduct (oluşturulan nesne):", newProduct);

    Product.add(newProduct);
    Cart.add(name);

    res.redirect('/products/new');
  } catch (error) {
    console.error("⛔ ERROR:", error);
    res.status(404).send('Product not found');
  }
};





exports.getProductsCount = (req, res) => {
  const count = Cart.getProductsQuantity();
  res.json({ count });
};
