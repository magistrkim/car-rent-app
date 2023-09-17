import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-columns: 1fr;
  column-gap: 29px;
  row-gap: 50px;
  margin-bottom: 100px;

  @media screen and (min-width: 1180px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
