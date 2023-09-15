import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { colors } from '../../styles/GlobalStyles';

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
  color: ${colors.textLightColor};
  text-transform: uppercase;
  transition: color 0.3 ease-in;

  &.active {
    color: ${colors.textHoverGrayColor};
  }
  &:hover,
  &:focus {
    color: ${colors.textHoverGrayColor};
  }
`;
