import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 48px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #ffffff;
  text-transform: uppercase;
  transition: color 0.3 ease-in;

  &.active {
    color: #a9a9a9;
  }
  &:hover,
  &:focus {
    color: #a9a9a9;
  }
`;
