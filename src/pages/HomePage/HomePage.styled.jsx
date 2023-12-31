import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import HeroImage from '../../assets/hero2.jpg';
import { colors } from '../../styles/GlobalStyles';

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 260px 120px 10px 120px;
  background-image: url('${HeroImage}');
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  border-radius: 40px;
`;
export const Title = styled.h1`
  max-width: 700px;
  color: ${colors.textSecondLightColor};
  font-size: 64px;
  font-weight: 600;
  line-height: 68px;
  margin-bottom: 60px;
`;
export const Text = styled.p`
  max-width: 400px;
  color: ${colors.textSecondLightColor};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
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
export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
`;

export const SubTitle = styled.h3`
  color: #d3d3d3;
  font-size: 56px;
  font-weight: 700;
  line-height: 58px;
  margin-bottom: 10px;
`;
