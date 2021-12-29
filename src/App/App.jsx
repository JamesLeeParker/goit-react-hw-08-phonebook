import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Phonebook from "../Phonebook/Phonebook";
// import * as storage from "../services/localStorage";

const STORAGE_KEY = "contacts";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   const savedContacts = storage.get(STORAGE_KEY);
  //   if (savedContacts) {
  //     setContacts(savedContacts);
  //     // this.setState({ contacts: savedContacts });
  //   }
  // }, []);

  // useEffect(
  //   (contacts) => {
  //     storage.save(STORAGE_KEY, contacts);
  //   },
  //   [contacts]
  // );

  // const getAddContacts = (value) => {
  //   setContacts([...contacts, value]);
  // };

  // const inputValue = (e) => {
  //   e.preventDefault();
  //   const contact = {
  //     id: nanoid(),
  //     name: e.target[0].value,
  //     number: e.target[1].value,
  //   };

  // e.target[0].value = "";
  // e.target[1].value = "";

  //   if (
  //     contacts.find(
  //       (item) => item.name.toLowerCase() === contact.name.toLowerCase()
  //     )
  //   )
  //     return alert("NO!");
  //   return getAddContacts(contact);
  // };

  // const deleteContact = (id) => {
  //   const newArr = contacts.filter((contact) => contact.id !== id);
  //   setContacts(newArr);
  // };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const getFilteredContact = () => {
    // const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
  };

  return (
    <div>
      <Phonebook
        contacts={getFilteredContact()}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;
