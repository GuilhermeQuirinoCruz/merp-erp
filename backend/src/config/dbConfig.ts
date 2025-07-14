import { Pool } from "pg";
import config from "./envConfig.js";

const pool = new Pool({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbDatabase,
  port: 5432,
});

export default pool;
