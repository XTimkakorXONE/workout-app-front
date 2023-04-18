import React from "react";
import styles from "./Profile.module.scss";
import stylesLayout from "../../layout/Layout.module.scss";
import clsx from "clsx";
import { Header } from "../../components/header/Header";
import { useProfile } from "./useProfile";
import Loader from "../../ui/Loader";
import { Statistics } from "../../components/statistics/statistics";

const Profile = () => {
  const { data, isLoading } = useProfile();

  return (
    <>
      <div
        className={clsx(stylesLayout.wrapper, stylesLayout.otherPage)}
        style={{
          backgroundImage: `url('src/assets/image_profile.jpg')`,
          height: 366,
        }}
      >
        <Header backLink="/" />

        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <h1 className={clsx(stylesLayout.heading, styles.center)}>
                {data?.email}
              </h1>
              <Statistics />
            </>
          )}
        </div>
      </div>

      <div
        className="wrapper-inner-page"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div className={styles.before_after}>
          {data?.images?.map((image, index) => (
            <div key={image}>
              <div className={styles.heading}>
                {index === 1 ? "After" : "Before"}
              </div>
              <img
                src={image}
                alt=""
                draggable={false}
                style={{ borderRadius: 14 }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
