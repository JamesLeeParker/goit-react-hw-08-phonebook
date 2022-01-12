import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <NavLink to={"/registration"}>Registration</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
    </div>
  );
};

export default AuthNav;
