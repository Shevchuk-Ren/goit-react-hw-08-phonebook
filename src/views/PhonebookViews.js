import { Component } from 'react';
import Section from '../components/Section';
import Phonebook from '../components/Phonebook';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Container from '../components/Container';
import { connect } from 'react-redux';
import { fetchContact } from '../redux/phoneBook/phonebook-operations';
import { getLoading } from '../redux/phoneBook/phonebook-selectors';

class App extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <Phonebook />
        </Section>

        <Section title="Contacts">
          <Filter />
          {this.props.isLoadingContacts && (
            <h3 className="loading">Loading...</h3>
          )}
          <ContactList />
        </Section>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
