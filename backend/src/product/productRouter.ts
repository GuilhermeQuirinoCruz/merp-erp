import { Router } from "express";
import {
  deleteProduct,
  getAllProducts,
  getProduct,
  insertProduct,
  updateProduct,
} from "./productController.js";

const router = Router();

router.route("/").get(getAllProducts).post(insertProduct);

router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

export default router;
