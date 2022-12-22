import response from "../helper/response.js";
import { register } from "../models/register.js";

export const registerData = {
  addData: async (req, res) => {
    if (!req.body) {
      await res.status(400).json({
        message: "Content can not be empty",
      });
    }

    const data = {
      nama_lengkap: await req.body.nama_lengkap,
      alamat: await req.body.alamat,
      email: await req.body.email,
      pekerjaan: await req.body.pekerjaan,
      jenis_kelamin: await req.body.jenis_kelamin,
    };

    register(data, (err, data) => {
      if (err) {
        response(400, null, "Error While creating data", res);
      }
      response(200, data, "Success creating data", res);
    });
  },
};
