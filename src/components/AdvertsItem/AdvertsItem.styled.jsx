import styled from '@emotion/styled';
import { colors } from '../../styles/GlobalStyles';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
export const Image = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;
export const FavoriteBtn = styled.button`
  position: absolute;
  margin: 0;
  padding: 0;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  font-size: 18px;

  color: ${colors.textLightColor};
  background-color: transparent;
  border: none;

  transition: color 0.3 ease-in;

  &:hover,
  &:focus {
    color: ${colors.mainAccentColor};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  color: ${colors.textDarkColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 24p;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  row-gap: 4px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 28px;
`;
export const Item = styled.li`
padding-right: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  height: 44px;
  padding: 12px 60px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: ${colors.secondaryAccentColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${colors.textLightColor};
  margin-top: auto;

  &:hover,
  &:focus {
    background-color: ${colors.mainAccentColor};
  }
`;