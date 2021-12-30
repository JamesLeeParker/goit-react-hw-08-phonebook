import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const Header = () => {
  return (
    <>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </>
  );
};

export default Header;
