import { expect, test, describe } from "vitest";
import { getProduct, getAllProducts } from "../product/productController.js";

describe("post requests", () => {
  test("returns 1", () => {});
});

describe("get requests", () => {
  test("get all", async () => {
    
    expect(await getAllProducts()).toBe(1);
  });
});
