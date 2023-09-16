import styled from '@emotion/styled';
import HeroImage from '../../assets/hero2.jpg';
import { colors } from '../../styles/GlobalStyles';

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 260px 120px 100px 120px;
  background-image: url('${HeroImage}');
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;
export const Title = styled.h1`
  max-width: 700px;
  color: ${colors.textSecondLightColor};
  font-size: 64px;
  font-weight: 600;
  line-height: 68px;
  margin-bottom: 40px;
`;
