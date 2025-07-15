import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hey");
});

// Routes
const BASE_URL: string = "/api";

import productRoutes from "./product/productRouter.js";
app.use(BASE_URL + "/product", productRoutes);

import { errorHandler } from "./middleware/errorHandler.js";
app.use(errorHandler)

export default app;
