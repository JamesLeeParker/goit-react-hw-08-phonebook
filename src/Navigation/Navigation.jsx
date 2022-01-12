import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to={"/"}>Main</NavLink>
      <NavLink to={"/contacts"}>Contacts</NavLink>
    </div>
  );
};

export default Navigation;
