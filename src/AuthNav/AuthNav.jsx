import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <>
      <NavLink to={"/registration"}>Registration</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
    </>
  );
};

export default AuthNav;
