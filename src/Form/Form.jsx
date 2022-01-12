import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { getContacts, addItem } from "../redux/contactsActions";
import s from "./Forem.module.scss";

export default function Form() {
  const [name, setContact] = useState("");
  const [number, setNumber] = useState("");
  const contact = { id: nanoid(), name, number };
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const handleInputName = (e) => setContact(e.target.value);
  const handleInputNumber = (e) => setNumber(e.target.value);
  const handleAddContact = (e) => {
    e.preventDefault();
    if (
      contacts?.find(
        (item) => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    )
      return alert("NO!");

    dispatch(addItem(contact));
  };

  return (
    <form onSubmit={handleAddContact}>
      <h2>Name contact</h2>
      <label>
        <p>Name:</p>
        <input
          onChange={handleInputName}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <p>Phone number:</p>
        <input
          onChange={handleInputNumber}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button>Add contact</button>
    </form>
  );
}
