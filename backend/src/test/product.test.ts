import { expect, test, describe, afterEach, beforeEach } from "vitest";
import { getErrorsWithProduct } from "../product/productController.js";
import { Product, getEmptyProduct } from "../model/product.js";

function resetProduct(product: Product) {
  product.id = 0;
  (product.tag = ""), (product.price = 0);
  product.stock = 0;
}

describe("Product validation", async () => {
  let product: Product = getEmptyProduct();
  beforeEach(() => {
    resetProduct(product);
  });

  test("Should reject product with no tag", () => {
    expect(getErrorsWithProduct(product)).toContain("Tag não pode ser vazia");
  });

  test("Should reject product with a tag length greater than allowed", () => {
    for (let i = 0; i < 10; i++) {
      product.tag += "0123456789-";
    }

    expect(getErrorsWithProduct(product)).toContain("Tag muito longa");
  });

  test("Should reject product with no price", () => {
    expect(getErrorsWithProduct(product)).toContain(
      "O produto precisa de um preço"
    );
  });

  test("Should reject product with negative price or stock", () => {
    product.price = -1;
    expect(getErrorsWithProduct(product)).toContain(
      "O preço deve ser um número positivo"
    );

    product.stock = -1;
    expect(getErrorsWithProduct(product)).toContain(
      "O estoque deve ser um número positivo"
    );
  });
});
