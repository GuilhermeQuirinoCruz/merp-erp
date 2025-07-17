CREATE DATABASE merp;

\c merp

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    tag VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL
);

CREATE TABLE coupon (
    id SERIAL PRIMARY KEY,
    code VARCHAR(100) NOT NULL,
    expires_at DATE NOT NULL,
    discount_percentage DECIMAL(10,2) NOT NULL
);

CREATE TABLE order (
    id SERIAL PRIMARY KEY,
    ordered_at DATE NOT NULL,
    delivery_tax DECIMAL(10,2),
    total DECIMAL(10,2) NOT NULL,
    coupon_discount DECIMAL(10,2)
);

CREATE TABLE order_product (
    order_id INT REFERENCES pedido(id) NOT NULL ON DELETE CASCADE,
    tag VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);