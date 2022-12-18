import connection from "../config/dbConfig.js";

const getAllData = (result) => {
  const sql = "SELECT * FROM members";

  connection.query(sql, (err, res) => {
    if (err) {
      console.log("err: ", err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

const queryGetDataById = (id, result) => {
  const sql = `SELECT * FROM members WHERE id = ${id}`;

  connection.query(sql, (err, res) => {
    if (err) {
      console.log("err: ", err);
      result(err, null);
    }
    result(null, res);
  });
};

const updateDataById = (id, data, result) => {
  const sql =
    "UPDATE members SET nama_lengkap = ?, email = ?, alamat = ?, pekerjaan = ? WHERE id = ?";

  connection.query(
    sql,
    [data.nama_lengkap, data.email, data.alamat, data.pekerjaan, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ id: "not_found" }, null);
        return;
      }
      result(null, data);
    }
  );
};

const deleteDataById = (id, result) => {
  const sql = `DELETE FROM members WHERE id = ${id}`;

  connection.query(sql, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }

    result(null, res.affectedRows);
  });
};

export { getAllData, queryGetDataById ,updateDataById, deleteDataById };
