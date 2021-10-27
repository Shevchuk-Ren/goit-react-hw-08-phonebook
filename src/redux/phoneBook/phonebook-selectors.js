import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => {
  return state.phoneBook.contacts;
};

export const getFilter = state => state.phoneBook.filter;

export const getVisibleFilter = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export const getLoading = state => state.phoneBook.loading;
