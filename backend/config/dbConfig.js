import * as dotenv from "dotenv";
dotenv.config();

import { createConnection } from "mysql2";

const { DB_HOST, DB_USER, DB_NAME } = process.env;

const connection = createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: "",
  database: DB_NAME,
});

connection.connect((err) => {
  if (err) console.log(err, "Database cannot Connected");
  console.log("Database connected");

  const sql =
    "SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA LIKE 'multimatics_test'";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("table already created");

    if (result.length !== 1) {
      const sql =
        "CREATE TABLE members( id INT(3) primary key NOT NULL AUTO_INCREMENT, nama_lengkap VARCHAR(50) NOT NULL, alamat VARCHAR(75) NOT NULL, email VARCHAR(25) NOT NULL UNIQUE, pekerjaan ENUM('pns', 'swasta', 'usaha'), jenis_kelamin ENUM('Laki-laki', 'Wanita') NOT NULL)";
      connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("table created");
      });
    }
  });
});

export default connection;
