import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactError,
  fetchContactSuccess,
} from "./actions";

axios.defaults.baseURL = " http://localhost:4040";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }

  // .then(({ data }) => dispatch(fetchContactSuccess(data)))
  // .catch((error) => dispatch(fetchContactError(error)));
};

// const fetchContacts = () => (dispatch) => {
//   dispatch(fetchContactRequest());

//   axios
//     .get("/contacts")
//     .then(({ data }) => dispatch(fetchContactSuccess(data)))
//     .catch((error) => dispatch(fetchContactError(error)));
// };

const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const contact = {
      name: name,
      number: number,
      id: "",
    };

    dispatch(addContactRequest());

    axios
      .post("/contacts", contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch((error) => dispatch(addContactError(error)));
  };

const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export default { addContact, deleteContact, fetchContacts };
