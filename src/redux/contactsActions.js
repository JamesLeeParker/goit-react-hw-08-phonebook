import { createAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import * as api from "../services/api";

const setContacts = createAction("contacts/contacts_set");
const addContact = createAction("contacts/contact_add");
const deleteContact = createAction("contacts/contact_delete");
const onFilter = createAction("contacts/filter_change");

const API_ENDPOINT = "contacts";

const getContacts = () => (dispatch) => {
  api.getData().then((contacts) => dispatch(setContacts(contacts)));
};

const addItem = (contact) => (dispatch) => {
  console.log(contact);
  api.saveItem(contact);
  dispatch(addContact(contact));
};

const onDeleteContact = (id) => (dispatch) => {
  api.deleteItem(id);
  dispatch(deleteContact(id));
};

// const setContacts = (contacts = []) => ({
//   type: "contacts/contacts_set",
//   payload: contacts,
// });

// const addContact = (contact) => ({
//   type: "contacts/contact_add",
//   payload: contact,
// });

// const deleteContact = (id) => ({
//   type: "contacts/contact_delete",
//   payload: id,
// });

// const onFilter = (text = "") => ({
//   type: "contacts/filter_change",
//   payload: text,
// });

export {
  deleteContact,
  addContact,
  setContacts,
  onFilter,
  getContacts,
  addItem,
  onDeleteContact,
};
