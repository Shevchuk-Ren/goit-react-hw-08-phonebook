import React from 'react';
import { useSelector } from 'react-redux';

import authSelectors from '../../redux/auth/auth-selectors';
import { LinkNav } from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <LinkNav to="/" exact activeClassName="activelink">
        General
      </LinkNav>

      {isLoggedIn && (
        <LinkNav to="/contacts" exact activeClassName="activelink">
          Phonebook
        </LinkNav>
      )}
    </nav>
  );
}
