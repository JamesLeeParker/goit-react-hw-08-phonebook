import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/Operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.currUser.user.name);

  const getLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <p>Wellcome {userName}</p>
      <button onClick={getLogOut}>Logout</button>
    </>
  );
};

export default UserMenu;
