import clsx from "clsx";
import React from "react";
import { menu } from "./menu.data";
import styles from "./Hamburger.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../../hooks/useAuth";

export const Menu = ({ isShow, setIsShow }) => {
  const navigate = useNavigate();

  const { setIsAuth } = useAuth();

  const logoutHandler = () => {
    Cookies.remove("local");
    setIsAuth(false);
    setIsShow(false);

    navigate("/auth");
  };

  return (
    <nav
      className={clsx(styles.menu, {
        [styles.show]: isShow,
      })}
    >
      <ul>
        {menu.map((item, idx) => (
          <li key={idx}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}

        <li>
          <button onClick={logoutHandler}>logout</button>
        </li>
      </ul>
    </nav>
  );
};
