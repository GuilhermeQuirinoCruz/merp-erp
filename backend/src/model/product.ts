import { Request } from "express";
import { QueryResult } from "pg";

export class Product {
  id: number;
  tag: string;
  price: number;
  stock: number;

  constructor(id: number, tag: string, price: number, stock: number) {
    this.id = id;
    this.tag = tag;
    this.price = price;
    this.stock = stock;
  }
}

function newProductFromQueryResultRow(row: any) {
  return new Product(
    parseInt(row.id),
    row.tag,
    parseFloat(row.price),
    parseInt(row.stock)
  );
}

export function getProductArrayFromQueryResult(result: QueryResult) {
  let products: Product[] = [];
  result.rows.forEach((row) => {
    products.push(newProductFromQueryResultRow(row));
  });

  return products;
}

export function getProductFromRequest(req: Request) {
  const { tag, price, stock } = req.body;
  return new Product(0, tag, parseInt(price), parseInt(stock));
}

export function getEmptyProduct() {
  return new Product(0, "", 0, 0);
}