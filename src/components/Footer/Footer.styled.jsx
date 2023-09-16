import styled from '@emotion/styled';
import { colors } from '../../styles/GlobalStyles';

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 120px;
  background-color: ${colors.darkBgColor};
  min-height: 200px;
  box-shadow: 8px 4px 8px 8px rgba(1, 96, 192, 0.519),
    0px 6px 12px 10px rgba(67, 129, 243, 0.649), 0px 0px;
`;
export const Title = styled.h3`
  max-width: 700px;
  color: ${colors.textSecondLightColor};
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 20px;
`;
