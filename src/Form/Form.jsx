import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { addContact, setContacts } from "../redux/contactsActions";
import { getContacts, addItem } from "../redux/contactsActions";
import * as storage from "../services/localStorage";
import s from "./Forem.module.scss";

const STORAGE_KEY = "contacts";

export default function Form() {
  const [name, setContact] = useState("");
  const [phone, setPhone] = useState("");
  const contact = { id: nanoid(), name, phone };
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  // const contacts = useSelector((state) => state.items);

  useEffect(() => {
    getContacts()(dispatch);
  }, []);
  // useEffect(() => {
  //   const savedContacts = storage.get(STORAGE_KEY);
  //   if (savedContacts) {
  //     dispatch(setContacts(savedContacts));
  //   }
  // }, []);

  useEffect(() => {
    storage.save(STORAGE_KEY, contacts);
  }, [contact]);

  const handleInputName = (e) => setContact(e.target.value);
  const handleInputNumber = (e) => setPhone(e.target.value);
  const handleAddContact = (e) => {
    e.preventDefault();
    if (
      contacts.find(
        (item) => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    )
      return alert("NO!");

    addItem(contact)(dispatch);
    // dispatch(addContact(contact));
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
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button>Add contact</button>
    </form>
  );
}
