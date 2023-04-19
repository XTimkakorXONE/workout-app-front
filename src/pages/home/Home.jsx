import React from "react";
import { Layout } from "../../layout/Layout";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/button/Button";
import styles from "./Home.module.scss";
import { useAuth } from "../../hooks/useAuth";
import Cookies from "js-cookie";
import { Statistics } from "../profile/statistics/Statistics";

const Home = () => {
  const navigate = useNavigate();

  const isAuth = useAuth();

  React.useEffect(() => {
    const token = Cookies.get("local");
    if (!token) {
      navigate("/auth");
    }
  }, []);

  return (
    <Layout bgImage="images/workout_main.jpg">
      <Button clickHandler={() => navigate("/new-workout")}>New</Button>
      <h1 className={styles.heading}>Exercise for the best</h1>
      <Statistics />
    </Layout>
  );
};

export default Home;
