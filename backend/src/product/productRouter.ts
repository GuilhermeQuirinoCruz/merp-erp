import { Router } from "express";
import { getAllProducts, insertProduct } from "./productController.js";

const router = Router();

router.route("/").get(getAllProducts).post(insertProduct);

// router.route("/:id").put().delete();

export default router;
