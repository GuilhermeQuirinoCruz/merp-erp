import { Request, Response, NextFunction } from "express";
import { Product } from "../model/product.js";
import { ProductQueries } from "./productQueries.js";
import pool from "../config/dbConfig.js";

export const getProduct = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  // try {
  //   const id: number = parseInt(req.params.id);

  //   pool.query(ProductQueries.getProduct, [id], (error, results) => {
  //     res.status(200).json("resultado do select");
  //   });
  // } catch (error) {
  //   next(error);
  // }

  return 1;
};

export async function getAllProducts() {
  // pool.query("SELECT * FROM produto", (error, results) => {
  //   return results;
  // });

  return 1;
}

export const handleGetAllProducts = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const results = await getAllProducts();
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

export const testfn = function () {
  return 1;
};
