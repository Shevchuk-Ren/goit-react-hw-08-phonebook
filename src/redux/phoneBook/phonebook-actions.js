import { createAction } from '@reduxjs/toolkit';

export const fetchPhonebookRequest = createAction('phonebook/fetchContact');
export const fetchPhonebookSuccess = createAction(
  'phonebook/fetchContactSuccess',
);
export const fetchPhonebookError = createAction('phonebook/fetchContactError');

export const addPhonebookRequest = createAction('phonebook/addContact');
export const addPhonebookSuccess = createAction('phonebook/addContactSuccess');
export const addPhonebookError = createAction('phonebook/addContactError');

export const deletePhonebookRequest = createAction('phonebook/deleteContact');
export const deletePhonebookSuccess = createAction(
  'phonebook/deleteContactSuccess',
);
export const deletePhonebookError = createAction(
  'phonebook/deleteContactError',
);

export const filterContacts = createAction('phonebook/cgangeFilter');

// import phoneBookTypes from './phonebook-types';
// import { v4 as uuidv4 } from 'uuid';
// import store from '../store';

// export const addContact = data => ({
//   type: phoneBookTypes.ADD_CONTACT,
//   payload: {
//     id: uuidv4(),
//     name: data.name,
//     number: data.number,
//   },
// });

// export const deleteContact = contactId => ({
//   type: phoneBookTypes.DELETE,
//   payload: contactId,
// });

// export const filterContacts = value => ({
//   type: phoneBookTypes.FILTER,
//   payload: value,
// });
