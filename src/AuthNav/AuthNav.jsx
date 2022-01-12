import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.scss";

const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={s.link}
        activeClassName={s.isActive}
        to={"/registration"}
      >
        Registration
      </NavLink>
      <NavLink className={s.link} activeClassName={s.isActive} to={"/login"}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
