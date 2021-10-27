import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {
  addPhonebookError,
  addPhonebookRequest,
  addPhonebookSuccess,
  deletePhonebookError,
  deletePhonebookRequest,
  deletePhonebookSuccess,
  fetchPhonebookError,
  fetchPhonebookRequest,
  fetchPhonebookSuccess,
} from './phonebook-actions';

export const fetchContact = () => async dispatch => {
  dispatch(fetchPhonebookRequest());

  try {
    const { data } = await axios.get(`/contacts`);
    console.log(data, `data in contacts fech`);
    console.log(axios.defaults, `axios api in fetch`);
    dispatch(fetchPhonebookSuccess(data));
  } catch (error) {
    dispatch(fetchPhonebookError(error));
  }
};

export const addContact = data => dispatch => {
  const { name, number } = data;
  const contactNew = {
    id: uuidv4(),
    name: name,
    number: number,
  };

  dispatch(addPhonebookRequest());

  axios
    .post(`/contacts`, contactNew)
    .then(({ data }) => dispatch(addPhonebookSuccess(data)))
    .catch(error => dispatch(addPhonebookError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deletePhonebookRequest());

  axios
    .delete(`/contacts/{id}`)
    .then(() => dispatch(deletePhonebookSuccess(id)))
    .catch(error => dispatch(deletePhonebookError(error)));
};
