import styled from '@emotion/styled';
import HeroImage from '../../assets/hero2.jpg';
import { colors } from '../../styles/GlobalStyles';

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 200px 120px 100px 120px;
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
  font-size: 56px;
  font-weight: 600;
  line-height: 68px;
  margin-top: 80px;
  margin-bottom: 40px;
`;
export const SocialsList = styled.ul`
  display: flex;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 34px;
  }
`;
export const SocialsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  width: 70px;
  height: 70px;
  &:hover,
  &:focus {
    &:nth-of-type(1) {
      background: #0088cc;
    }
    &:nth-of-type(2) {
      background: #25d366;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
    }
    &:nth-of-type(3) {
      background: #8f5db7;
    }
    &:last-child {
      background: #bb001b;

    }
  }
`;

export const SocialsLink = styled.a``;
