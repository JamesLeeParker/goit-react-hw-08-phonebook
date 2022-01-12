import { NavLink } from "react-router-dom";
import s from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div>
      <NavLink className={s.link} activeClassName={s.isActive} exact to={"/"}>
        Main
      </NavLink>
      <NavLink className={s.link} activeClassName={s.isActive} to={"/contacts"}>
        Contacts
      </NavLink>
    </div>
  );
};

export default Navigation;
