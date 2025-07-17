import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

interface Config {
  port: number;
  dbUser: string;
  dbPassword: string;
  dbHost: string;
  dbDatabase: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3001,
  dbUser: process.env.POSTGRES_USER || "root",
  dbPassword: process.env.POSTGRES_PASSWORD || "password",
  dbHost: process.env.POSTGRES_HOST || "localhost",
  dbDatabase: process.env.POSTGRES_DATABASE || "merp",
};

export default config;
