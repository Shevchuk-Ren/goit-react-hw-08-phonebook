import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item, List } from './ContactList.styled';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phoneBook/phonebook-operations';
import { getVisibleFilter } from '../../redux/phoneBook/phonebook-selectors';
import avatar from './logo.jpg';
const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(({ name, number, id }) => (
      <Item key={id}>
        <span>{name} : </span>
        <span>{number}</span>
        <Button onClick={() => onDelete(id)}>Delete</Button>
      </Item>
    ))}
  </List>
);

const mapStateToProps = state => ({
  contacts: getVisibleFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// export default ContactList;
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
