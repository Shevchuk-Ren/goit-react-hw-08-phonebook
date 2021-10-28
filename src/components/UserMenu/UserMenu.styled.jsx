import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 4px;

  @media screen and (min-width: 768px) {
    width: 50px;
  }
`;

export const Title = styled.span`
  font-weight: 700;

  color: white;
  @media screen and (min-width: 768px) {
    margin-right: 12px;
  }
`;

export const Name = styled.span`
  font-size: 17px;
  color: #e84a5f;
`;

export const Button = styled.button`
  width: 50px;
  background-color: rgb(68, 68, 154);
  border-radius: 2px;
  color: rgb(241, 239, 235);
  padding: 6px;
`;
