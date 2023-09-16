import styled from '@emotion/styled';
import { colors } from '../../styles/GlobalStyles';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
export const ModalFrame = styled.div`
  width: 540px;
  min-height: 750px;
  background: ${colors.mainBgColor};
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
`;
export const Button = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
export const Image = styled.img`
  width: 20px;
  height: 20px;
`;
