import Cookies from "js-cookie";
import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useCheckToken = () => {
  const { setIsAuth, isAuth } = useAuth();
  const { pathname } = useLocation();

  React.useEffect(() => {
    const token = Cookies.get("local");
    if (!token) setIsAuth(false);
  }, [pathname, isAuth]);
};
