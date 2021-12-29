import { useSelector, useDispatch } from "react-redux";

import { onDeleteContact } from "../../redux/contactsActions";

export default function Contacts() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  // const contacts = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const btnDelete = (e) => {
    const elemId = e.target.closest("li").getAttribute("id");
    return onDeleteContact(elemId)(dispatch);
  };
  // const btnDelete = (e) => {
  //   const elemId = e.target.closest("li").getAttribute("id");
  //   return dispatch(deleteContact(elemId));
  // };

  const getFilteredContact = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) => {
      console.log("✈️ ~ contact", contact);
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
  };

  return getFilteredContact().map(({ id, name, phone }) => {
    return (
      <li id={id} key={id}>
        <span>{name}</span>: <span>{phone}</span>
        <button type="button" onClick={btnDelete}>
          delete
        </button>
      </li>
    );
  });
}
