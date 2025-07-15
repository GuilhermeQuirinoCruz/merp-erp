import { Request, Response, NextFunction } from "express";
import pool from "../config/dbConfig.js";

export const getAllProducts = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  pool.query("SELECT * FROM produto", (error, results) => {
    if (error) {
      res.status(400).json("erro");
    }

    res.status(200).json("resultado do select");
  });
};
