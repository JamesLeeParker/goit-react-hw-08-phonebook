import axios from "axios";

const getData = async () => {
  try {
    const { data } = await axios.get("/contacts");
    return data;
  } catch (error) {}
};

const saveItem = async (item) => {
  try {
    const { data } = await axios.post("/contacts", item);
    return data;
  } catch (error) {}
};

const deleteItem = async (id) => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`, id);
    return data;
  } catch (error) {}
};

export { getData, saveItem, deleteItem };
