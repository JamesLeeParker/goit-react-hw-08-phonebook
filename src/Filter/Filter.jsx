import { useDispatch } from "react-redux";
import { onFilter } from "../redux/contactsActions";

export default function Filter({ label = "" }) {
  const dispatch = useDispatch();

  const onFilterChange = (e) => {
    // console.log(e.target.value);
    dispatch(onFilter(e.target.value));
  };

  return (
    <div>
      <label>
        {label}
        <input type="text" onChange={onFilterChange} />
      </label>
    </div>
  );
}
