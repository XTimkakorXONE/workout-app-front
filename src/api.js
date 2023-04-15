import axios from "axios";
import Cookies from "js-cookie";

const instanceAxios = axios.create({
  baseURL: "http://localhost:4444/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get("local")}`,
  },
});

export default instanceAxios;
