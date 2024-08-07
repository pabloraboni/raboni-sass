import styles from "./Header.module.scss";

//hooks
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles["pr-box__header"]}>
      <div className="pr-container">
        <div className={styles["pr-header__content"]}>
          <NavLink to="/" className={styles["pr-header__logo"]}>
            <span className="pr-icon-pablologo"></span>
          </NavLink>

          <nav className={styles["pr-box__menu"]}>
            <NavLink to="/" className={styles["pr-menu__item"]}>
              <span className="pr-icon-home"></span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
