import axios from "axios";
import Cookies from "js-cookie";

const instanceAxios = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get("local")}`,
  },
});

export default instanceAxios;
