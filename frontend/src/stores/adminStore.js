import axios from "axios";
import create from "zustand";

const BASEURL = import.meta.env.VITE_API;
const apiClient = axios.create({
  baseURL: BASEURL,
  timeout: 8000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

const useAdminStore = create((set, get) => ({
  datas: [],
  error: "",
  data: {
    nama_lengkap: "",
    alamat: "",
    email: "",
    job: "",
    jenis_kelamin: "",
  },
  getData: async () => {
    try {
      const response = await apiClient.get("/data");
      const data = response.data.payload.datas;
      set({ datas: data, error: "" });
    } catch (err) {
      set({ error: err.message, datas: [] });
    }
  },
  getDataById: async (id) => {
    try {
      const response = await apiClient.get(`/data/${id}`);
      const dataById = response.data.payload.datas[0];
      set({ data: { ...dataById } });
    } catch (err) {
      set({ error: err.message });
    }
  },
  updateDataById: async (id, data) => {
    try {
      const state = get();
      const response = await apiClient.put(`/data/${id}`, JSON.stringify(data));
      const dataById = response.data.payload;

      if (dataById.statusCode) {
        const datasUpdate = state.datas.map((dataUpdate) => {
          if (dataUpdate.id === data.id) {
            return { ...data };
          } else {
            return dataUpdate;
          }
        });
        set({ datas: datasUpdate, message: dataById.message, error: "" });
      } else throw new Error();

      return dataById.statusCode;
    } catch (err) {
      console.log(err);
      set({ message: "", error: err.message });
    }
  },
  deleteDataById: async (id) => {
    try {
      const state = get();
      const response = await apiClient.delete(`/data/${id}`);

      const dataById = response.data.payload;

      if (dataById.statusCode) {
        const filterData = state.datas.filter((data) => data.id !== id);
        set({ datas: filterData });
      }

      return dataById.statusCode;
    } catch (err) {
      console.log(err);
      set({ error: err.message });
    }
  },
}));

export default useAdminStore;
