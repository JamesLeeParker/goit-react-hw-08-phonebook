import Contacts from "./Contacts/Contacts";
import Filter from "../Filter/Filter";
import Form from "../Form/Form";
import s from "./Phonebook.module.scss";

const Phonebook = ({
  contacts,
  delContact,
  addContact,
  filter,
  onFilterChange,
}) => {
  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      <Form value={addContact} />
      <h1>Contacts</h1>
      <Filter
        value={filter}
        label={"Finde contact by name:"}
        onFilterChange={onFilterChange}
      />
      <ul>
        <Contacts contacts={contacts} delContact={delContact} />
      </ul>
    </div>
  );
};

export default Phonebook;
