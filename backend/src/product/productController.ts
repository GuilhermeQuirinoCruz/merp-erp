import { Request, Response, NextFunction } from "express";
import {
  Product,
  getProductFromRequest,
  getProductArrayFromQueryResult,
} from "../model/product.js";
import { ProductQueries } from "./productQueries.js";
import pool from "../config/dbConfig.js";
// import { PoolClient, QueryResult } from "pg";

export async function getProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id: number = parseInt(req.params.id);
  if (!id) {
    res.status(200).json({
      status: "fail",
      data: "ID required",
    });
  }

  try {
    pool.query(ProductQueries.getProduct, (error, result) => {
      if (!result) {
        res.status(200).json({
          status: "fail",
          data: error.message,
        });
      }

      res.status(200).json({
        status: "success",
        data: getProductArrayFromQueryResult(result) || [],
      });
    });
  } catch (error) {
    next(error);
  }
}

export async function getAllProducts(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    pool.query(ProductQueries.getAllProducts, (error, result) => {
      if (!result) {
        res.status(200).json({
          status: "fail",
          data: error.message,
        });
      }

      res.status(200).json({
        status: "success",
        data: getProductArrayFromQueryResult(result) || [],
      });
    });
  } catch (error) {
    next(error);
  }
}

export function getErrorsWithProduct(product: Product): string[] {
  let errors: string[] = [];

  if (!product.tag || product.tag.length == 0) {
    errors.push("Tag não pode ser vazia");
  }

  if (product.tag.length > 100) {
    errors.push("Tag muito longa");
  }

  if (!product.price || product.price == 0) {
    errors.push("O produto precisa de um preço");
  }

  if (product.price < 0) {
    errors.push("O preço deve ser um número positivo");
  }

  if (product.stock < 0) {
    errors.push("O estoque deve ser um número positivo");
  }

  return errors;
}

export async function insertProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const product = getProductFromRequest(req);
  const errors: string[] = getErrorsWithProduct(product);
  if (errors.length > 0) {
    res.status(200).json({
      status: "fail",
      data: errors,
    });
  }

  try {
    pool.query(
      ProductQueries.insertProduct,
      [product.tag, product.price, product.stock],
      (error, result) => {
        if (!result) {
          res.status(200).json({
            status: "fail",
            data: error.message,
          });
        }

        res.status(200).json({
          status: "success",
          data: result.rows || [],
        });
      }
    );
  } catch (error) {
    next(error);
  }
}
