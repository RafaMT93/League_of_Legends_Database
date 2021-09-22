import styled from 'styled-components';
import { Row } from 'antd';

export const WrapperChampionH1Name = styled.h1`
  font-size: calc(${({ theme }) => theme.fonts.fontSize} * 2);
  font-weight: bold;
  text-align: center;

  &::after {
    content: ' ';
    width: 350px;
    height: 0.125rem;
    background-color: #333;
    position: relative;
    display: block;
    margin: 2px auto;
  }
`;
export const WrapperChampionTitle = styled.p`
  font-size: calc(${({ theme }) => theme.fonts.fontSize} * 1.5);
  text-align: center;
  font-style: italic;
  margin-bottom: 20px;
`;
export const WrapperContent = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};

  padding: 0.313rem;
  margin: 2rem;
`;
export const WrapperLore = styled.section`
  margin-top: 2rem;
`;
export const WrapperH1 = styled.h1`
  font-size: calc(${({ theme }) => theme.fonts.fontSize} * 1.2);
  font-weight: bold;
`;
export const WrapperTips = styled(Row)`
  margin-top: 2rem;

  ul {
    margin-top: 1rem;
  }
`;
