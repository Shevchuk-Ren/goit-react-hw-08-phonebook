import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;

  @media screen and (max-width: 767px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 71px;
    padding-right: 71px;
    width: 1024px;
  }
`;
