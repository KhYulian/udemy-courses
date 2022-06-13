const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll
    .then(([rows, fields]) => {
      res.render('shop', {
        prods: rows,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: rows.length > 0,
        activeShop: true,
        productCSS: true
      });

    })
};
