import { connect } from 'react-redux';
import { filterContacts } from '../../redux/phoneBook/phonebook-actions';
import { getFilter } from '../../redux/phoneBook/phonebook-selectors';

import Filter from './Filter';

const mapStateToProps = state => ({
  filter: getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  onChange: evt => dispatch(filterContacts(evt.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
