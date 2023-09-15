import styled from '@emotion/styled';
import { colors } from '../../styles/GlobalStyles';

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 150px 120px;
`;
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;
export const Button = styled.button`
  background-color: transparent;
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${colors.mainAccentColor};
  text-decoration-line: underline;
  transition: color 0.3 ease-in;
  margin: 0 auto;

  &:hover,
  &:focus {
    color: ${colors.secondaryAccentColor};
  }
`;
export const Title = styled.h3`
  display: flex;
  justify-content: center;
  color: ${colors.mainAccentColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 24p;
`;
