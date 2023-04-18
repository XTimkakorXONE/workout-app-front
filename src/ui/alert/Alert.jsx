import clsx from "clsx";
import React from "react";

import styles from "./Alert.module.scss";

const Alert = ({ type = "success", text }) => {
  return <div className={clsx(styles.alert, styles[type])}>{text}</div>;
};

export default Alert;
