const db = require('../util/database');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {

  }

  static deleteById(id) {

  }

  static fetchAll() {
    return db.execute('SELECT * FROM products'); // execute will return a promise.
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE product.id = ?', [id])
  }
};