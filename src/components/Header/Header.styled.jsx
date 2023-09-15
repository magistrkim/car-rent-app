import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 120px;
  background-color: #0b44cd;
  position: fixed;
`;
export const LogoImg = styled.img`
  width: 100px;
  height: 78px;
`;
export const Button = styled(Link)`
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  padding: 10px 44px;
  color: #000000;
  background-color: #ffffff;
  border-radius: 12px;
  transition: background-color 0.3 ease-in;

  &:hover,
  &:focus {
    background-color: #a9a9a9;
  }
`;
