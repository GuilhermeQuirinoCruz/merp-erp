CREATE DATABASE merp;

\c merp

CREATE TABLE produto (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    estoque INT NOT NULL
);

CREATE TABLE cupom (
    id INT PRIMARY KEY,
    codigo VARCHAR(100) NOT NULL,
    vencimento DATE NOT NULL,
    porcentagem_desconto DECIMAL(10,2) NOT NULL
);

CREATE TABLE pedido (
    id INT PRIMARY KEY,
    data DATE NOT NULL,
    frete DECIMAL(10,2) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    desconto_cupom DECIMAL(10,2) NOT NULL
);

CREATE TABLE produto_pedido (
    id_pedido INT REFERENCES pedido(id) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL
);