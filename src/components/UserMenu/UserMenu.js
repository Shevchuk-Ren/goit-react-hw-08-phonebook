import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';

import defaultAvatar from '../../icons/rock.jpg';
import { Avatar, Button, Title, Wrapper, Name } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;
  return (
    <Wrapper>
      <Avatar src={avatar} alt="" width="45" />
      <Title>
        Welcome, <Name>{name}</Name>
      </Title>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
}
