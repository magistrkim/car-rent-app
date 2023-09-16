import styled from '@emotion/styled';

export const SocialsWrapper = styled.div``;

export const SocialsList = styled.ul`
  display: flex;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 44px;
  }
`;

export const SocialsItem = styled.li`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #f3f3f3;
  border-radius: 10px;
  width: 80px;
  height: 80px;
  &:hover,
  &:focus {
    &:nth-of-type(1) {
      background: #3b5998;
    }
    &:nth-of-type(2) {
      background: #d6249f;
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
    }
    &:nth-of-type(3) {
      background: #0e76a8;
    }
    &:last-child {
      background: #620296;
    }
  }
`;

export const SocialsLink = styled.a``;
