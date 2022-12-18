import * as dotenv from "dotenv";
dotenv.config();

import { createConnection } from "mysql2";

const {DB_HOST, DB_USER, DB_NAME} = process.env;

const connection = createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: "",
  database: DB_NAME,
});

connection.connect((err) => {
  if (!err) console.log("Database Connected");
  else console.log(err, "database cannot connected");
});

export default connection;
