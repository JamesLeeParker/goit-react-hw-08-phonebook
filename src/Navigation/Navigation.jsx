import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavLink to={"/"}>Main</NavLink>
      <NavLink to={"/contacts"}>Contacts</NavLink>
    </>
  );
};

export default Navigation;
