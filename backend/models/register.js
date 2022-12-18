import connection from "../config/dbConfig.js";

/**
 * @param {json} data object json
 * @param {callback} result callback
 */
export const register = (data, result) => {
  const sql = `INSERT INTO members(nama_lengkap, alamat, email, pekerjaan) VALUES (?, ?, ?, ?)`;

  connection.query(sql, Object.values(data), (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, data);
  });
};
