import { Request, Response, NextFunction } from "express";
import {
  getProductFromRequest,
  getProductArrayFromQueryResult,
  getErrorsWithProduct,
} from "../model/product.js";
import { ProductQueries } from "./productQueries.js";
import pool from "../config/dbConfig.js";

export async function getProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id: number = parseInt(req.params.id);
  if (!id) {
    res.status(200).json({
      status: "fail",
      message: "ID required",
    });
  }

  try {
    pool.query(ProductQueries.getProduct, [id], (error, result) => {
      if (!result) {
        res.status(200).json({
          status: "fail",
          message: error.message,
        });
      }

      res.status(200).json({
        status: "success",
        data: getProductArrayFromQueryResult(result)[0] || [],
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
          message: error.message,
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
      message: errors,
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
            message: error.message,
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

export async function updateProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id: number = parseInt(req.params.id);
  if (!id) {
    res.status(200).json({
      status: "fail",
      message: "ID required",
    });
  }

  const product = getProductFromRequest(req);
  const errors: string[] = getErrorsWithProduct(product);
  if (errors.length > 0) {
    res.status(200).json({
      status: "fail",
      message: errors,
    });
  }

  try {
    pool.query(
      ProductQueries.updateProduct,
      [id, product.tag, product.price, product.stock],
      (error, result) => {
        if (!result) {
          res.status(200).json({
            status: "fail",
            message: error.message,
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

export async function deleteProduct(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id: number = parseInt(req.params.id);
  if (!id) {
    res.status(200).json({
      status: "fail",
      message: "ID required",
    });
  }

  try {
    pool.query(ProductQueries.deleteProduct, [id], (error, result) => {
      if (!result) {
        res.status(200).json({
          status: "fail",
          message: error.message,
        });
      }

      res.status(200).json({
        status: "success",
        data: result.rows || [],
      });
    });
  } catch (error) {
    next(error);
  }
}
