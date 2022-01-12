import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import s from "./Header.module.scss";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className={s.section}>
      <header className={s.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
  );
};

export default Header;
