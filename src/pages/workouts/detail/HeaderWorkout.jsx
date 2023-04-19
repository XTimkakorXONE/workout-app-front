import clsx from "clsx";
import React from "react";
import { Header } from "../../../components/header/Header";
import styles from "./Workout.module.scss";
import stylesLayout from "../../../layout/Layout.module.scss";

const HeaderWorkout = ({ isSuccess, workoutLog }) => {
  return (
    <div
      className={clsx(stylesLayout.wrapper, stylesLayout.otherPage)}
      style={{ backgroundImage: `url(images/workout_main.jpg)`, height: 356 }}
    >
      <Header backLink="/workouts" />

      {isSuccess && (
        <div>
          <time className={styles.time}>{workoutLog.minute + "min."}</time>
          <h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
        </div>
      )}
    </div>
  );
};

export default HeaderWorkout;
