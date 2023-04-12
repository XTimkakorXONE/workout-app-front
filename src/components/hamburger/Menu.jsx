import clsx from "clsx";
import React from "react";
import { menu } from "./menu.data";
import styles from "./Hamburger.module.scss";
import { Link } from "react-router-dom";

export const Menu = ({ isShow }) => {
  const logoutHandler = () => {};

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
