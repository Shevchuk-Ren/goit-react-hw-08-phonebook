import { Component, useEffect } from 'react';
import Section from '../components/Section';
import Phonebook from '../components/Phonebook';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Container from '../components/Container';
import { connect, useDispatch } from 'react-redux';
import { fetchContact } from '../redux/phoneBook/phonebook-operations';
import { getLoading } from '../redux/phoneBook/phonebook-selectors';

export default function PhonebookView() {
  const dispatch = useDispatch();

  // useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <Phonebook />
      </Section>

      <Section title="Contacts">
        <Filter />
        {/* {this.props.isLoadingContacts && (
            <h3 className="loading">Loading...</h3>
          )} */}
        <ContactList />
      </Section>
    </Container>
  );
}
