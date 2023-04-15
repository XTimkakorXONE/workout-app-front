import Cookies from "js-cookie";
import axios from "../api";

class AuthService {
  async main(email, password, type) {
    try {
      const { data } = await axios.post(`/auth/${type}`, {
        email,
        password,
      });
      if (data.token) Cookies.set("local", data.token);
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default new AuthService();
