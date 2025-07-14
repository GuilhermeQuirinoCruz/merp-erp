import { Router } from "express";
import { getAllProducts } from "./productController.js";

const router = Router();

router.route("/").get(getAllProducts);
// router.route("/").get(getAllProducts).post();

// router.route("/:id").put().delete();

export default router;
