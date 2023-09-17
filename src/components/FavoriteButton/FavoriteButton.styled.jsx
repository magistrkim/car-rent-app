import styled from '@emotion/styled';
import { colors } from '../../styles/GlobalStyles';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export const FillIcon = styled(AiFillHeart)`
  color: #3470ff;
  font-size: 24px;
`;

export const OutlineIcon = styled(AiOutlineHeart)`
  color: white;
  font-size: 24px;
  transition: color 0.3 ease-in;

  &:hover,
  &:focus {
    color: ${colors.mainAccentColor};
  }
`;
