import { connect } from 'react-redux';
import Phonebook from './Phonebook';
import { getContacts } from '../../redux/phoneBook/phonebook-selectors';
import { addContact } from '../../redux/phoneBook/phonebook-operations';

const mapStateToProps = state => ({
  contacts: getContacts(state),
});
const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
