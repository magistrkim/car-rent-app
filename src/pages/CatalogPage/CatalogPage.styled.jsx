import styled from '@emotion/styled';

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
  color: #0b44cd;
  text-decoration-line: underline;
  transition: color 0.3 ease-in;
  margin: 0 auto;

  &:hover,
  &:focus {
    color: #3470ff;
  }
`;
export const Title = styled.h3`
  display: flex;
  justify-content: center;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24p;
`;
