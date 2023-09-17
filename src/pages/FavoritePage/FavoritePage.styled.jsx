import styled from '@emotion/styled';
import bgImage from '../../assets/favorite.jpg';
import { colors } from '../../styles/GlobalStyles';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 150px 120px;
`;
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url('${bgImage}');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px;
`;
export const Title = styled.h3`
  max-width: 500px;
  color: ${colors.textSecondLightColor};
  font-size: 56px;
  font-weight: 600;
  line-height: 58px;
  margin-bottom: 60px;
`;
export const LinkButton = styled(Link)`
  display: inline-block;
  font-weight: 600;
  line-height: 20px;
  font-size: 14px;
  padding: 14px 44px;
  background-color: ${colors.mainAccentColor};
  color: ${colors.textLightColor};
  border-radius: 12px;
  margin-bottom: 120px;
  transition: background-color 0.3 ease-in;

  &:hover,
  &:focus {
    background-color: ${colors.secondaryAccentColor};
  }
`;