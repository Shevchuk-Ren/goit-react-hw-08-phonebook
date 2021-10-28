import { useEffect } from 'react';
import Section from '../components/Section';
import Phonebook from '../components/Phonebook';
import ContactList from '..//components/ContactList';
import Filter from '../components/Filter';

import { useDispatch } from 'react-redux';
import { fetchContact } from '../redux/phoneBook/phonebook-operations';
import { Wrapper } from './PhonebookView.styled';

export default function PhonebookView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContact()), [dispatch]);

  return (
    <Wrapper>
      <Section title="Phonebook">
        <Phonebook />
      </Section>

      <Section title="Contacts">
        <Filter />
        {/* {isLoggedIn && (
            <h3 className="loading">Loading...</h3>
          )} */}
        <ContactList />
      </Section>
    </Wrapper>
  );
}
