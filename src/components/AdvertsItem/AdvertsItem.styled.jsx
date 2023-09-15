import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
export const Image = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 24p;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  row-gap: 4px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 28px;
`;
export const Item = styled.li`
padding-right: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  height: 44px;
  padding: 12px 80px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #ffffff;
  margin-top: auto;
`;