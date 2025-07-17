export class ProductQueries {
  static getProduct: string = "SELECT * FROM product WHERE id = $1";
  static getAllProducts: string = "SELECT * FROM product";
  static insertProduct: string = "INSERT INTO product(tag, price, stock) VALUES ($1, $2, $3)";
  static updateProduct: string = "UPDATE product SET tag = $2, price = $3, stock = $4 WHERE id = $1";
  static deleteProduct: string = "DELETE FROM product WHERE id = $1";
}