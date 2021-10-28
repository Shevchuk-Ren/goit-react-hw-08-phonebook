import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkNav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;

  color: rgb(61, 57, 57);
  @media screen and (max-width: 767px) {
    padding: 8px;
    font-weight: 700;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    padding: 12px;
    font-weight: 700;
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 15px;
    font-weight: 700;
    font-size: 20px;
  }
  &.activelink {
    composes: link;
    color: rgb(232, 74, 95);
  }
`;
