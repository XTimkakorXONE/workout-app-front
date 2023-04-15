import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Hamburger } from "../hamburger/Hamburger";
import styles from "./Header.module.scss";
import { IoMdArrowBack } from "react-icons/io";
import { FaUser } from "react-icons/fa";

export const Header = ({ backLink = "" }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { isAuth } = useAuth();

  return (
    <header className={styles.header}>
      {isAuth && (
        <>
          {pathname === "/" && isAuth ? (
            <button
              onClick={() => {
                navigate(backLink);
              }}
            >
              <IoMdArrowBack color="white" fontSize={29} />
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/profile");
              }}
            >
              <FaUser color="white" fontSize={27} />
            </button>
          )}
          <Hamburger />
        </>
      )}
    </header>
  );
};
