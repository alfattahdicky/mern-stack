import response from "../helper/response.js";
import {
  getAllData,
  queryGetDataById,
  updateDataById,
  deleteDataById,
} from "../models/admin.js";

export const adminData = {
  getData: async (req, res) => {
    if (!req.body) {
      await req.status(400).json({
        message: "Your data is empty",
      });
    }

    getAllData((err, data) => {
      if (err) {
        response(400, null, "Cannot get all data", res);
      }
      response(200, data, "Success Get ALl Data", res);
    });
  },

  getDataById: async (req, res) => {
    const id = req.params.id;
    if (!req.body) {
      await req.status(400).json({
        message: "Some erro while get data by id",
      });
    }

    queryGetDataById(id, (err, data) => {
      if (err) {
        response(400, null, "cannot get data by id", res);
      }

      response(200, data, "Success Get Data By Id", res);
    });
  },

  updateData: async (req, res) => {
    const id = req.params.id;
    if (!req.body) {
      await req.status(400).json({
        message: "Update is Failed",
      });

      return;
    }

    const data = {
      nama_lengkap: await req.body?.nama_lengkap,
      alamat: await req.body?.alamat,
      email: await req.body?.email,
      pekerjaan: await req.body?.pekerjaan,
    };

    updateDataById(id, data, (err, data) => {
      if (err) {
        response(400, null, `Failed Update data with ${id}`, res);
        return;
      }
      response(200, data, `Success Update data By ${id}`, res);
    });
  },

  deleteData: async (req, res) => {
    const id = req.params.id;
    if (!req.body) {
      await res.status(400).json({
        message: "Some error while removing data",
      });
    }

    deleteDataById(id, (err, data) => {
      if (err) {
        response(400, null, `Failed Remove Data By ${id}`, res);
      }
      response(200, data, "Success Delete Data", res);
    });
  },
};
