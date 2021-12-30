import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser, getCurrentUser } from "../redux/Operations";

const UserMenu = ({ name }) => {
  const dispatch = useDispatch();
  // const user = useSelector();

  useEffect(() => {
    getUser()(dispatch);
  }, []);

  return (
    <>
      <p>Wellcome {name}</p>
      <button>Logout</button>
    </>
  );
};

export default UserMenu;
