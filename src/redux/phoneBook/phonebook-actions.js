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
