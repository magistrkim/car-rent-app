import styled from '@emotion/styled';
import { colors } from '../../styles/GlobalStyles';

export const Image = styled.img`
  width: 100%;
  height: 228px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
  background: ${colors.secondaryBgColor};
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Title = styled.h2`
  color: ${colors.textDarkColor};
  font-size: 18px;
  font-weight: 500;
  line-height: 24p;
  margin-bottom: 8px;
`;
export const Span = styled.span`
  color: ${colors.secondaryAccentColor};
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
  margin-bottom: 20px;
`;
export const Item = styled.li`
  padding-right: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
`;
export const Description = styled.p`
  text-align: left;
  color: ${colors.textDarkColor};
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 20px;
`;
export const SubTitle = styled.h3`
  text-align: left;
  color: ${colors.textDarkColor};
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 8px;
`;
export const RentalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
  row-gap: 8px;
  margin-bottom: 24px;
`;
export const RentalItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-size: 12px;
  line-height: 18px;
  padding: 7px 14px;
`;
export const Button = styled.a`
  display: flex;
  height: 44px;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
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
