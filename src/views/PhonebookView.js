import { useEffect } from 'react';
import Section from '../components/Section';
import Phonebook from '../components/Phonebook';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Container from '../components/Container';
import { useDispatch } from 'react-redux';
import { fetchContact } from '../redux/phoneBook/phonebook-operations';

const styles = {
  container: {
    backgroundColor: 'red',
    padding: '15px',
    width: 'fit-content',
    borderRadius: '6px',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function PhonebookView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContact()), [dispatch]);

  return (
    <div className={styles.container}>
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
    </div>
  );
}
