import React from 'react';
import { LinkNav } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <LinkNav to="/register" exact activeClassName="activelink">
        Create an account
      </LinkNav>
      <LinkNav to="/login" exact activeClassName="activelink">
        Sign In
      </LinkNav>
    </div>
  );
}
