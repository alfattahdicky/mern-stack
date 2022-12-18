import create from "zustand";
import axios from "axios";

const BASEURL = import.meta.env.VITE_API;

const useRegisterStore = create((set, get) => ({
  addData: async (data) => {
    try {
      const postData = await axios.post(
        `${BASEURL}/register`,
        JSON.stringify(data),
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      return postData.status;
    } catch (err) {
      return err.message;
    }
  },
}));

export default useRegisterStore;
