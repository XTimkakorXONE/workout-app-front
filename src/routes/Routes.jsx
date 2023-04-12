import React from "react";
import { useAuth } from "../hooks/useAuth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { routes } from "./routes.data";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          if (route.auth && !isAuth) {
            return false;
          }
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          );
        })}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
