import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/Operations";
import s from "./UserMenu.module.scss";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.user.name);
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const getLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={s.userMenu}>
      <p>
        Wellcome <span className={s.name}>{userName}</span>
      </p>
      <button className={s.btnLogout} onClick={getLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
