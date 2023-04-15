import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

const Button = ({ children, clickHandler, size = "xl" }) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={clsx(styles.button, styles[size])}
        onClick={clickHandler}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
