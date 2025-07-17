export class ProductQueries {
  static getProduct: string = "SELECT * FROM product WHERE id = $1";
  static getAllProducts: string = "SELECT * FROM product";
  static insertProduct: string = "INSERT INTO product(tag, price, stock) VALUES ($1, $2, $3)";
}