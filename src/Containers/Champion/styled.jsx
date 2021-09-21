import styled from 'styled-components';
import { Row, Col } from 'antd';

export const WrapperChampionDiv = styled.div`
  color: ${({ theme }) => theme.colors.secondatyText};
  font-size: ${({ theme }) => theme.fonts.fontSize};
  font-weight: bold;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%),
    url(${({ image }) => image}) no-repeat;
  background-position: center;
  background-size: cover;
  height: 500px;

  @media (max-width: 900px) {
    height: 400px;
  }
  @media (max-width: 700px) {
    height: 300px;
  }
  @media (max-width: 520px) {
    height: 200px;
  }
`;

export const WrapperChampionTitle = styled.p`
  font-size: calc(${({ theme }) => theme.fonts.fontSize} * 1.5);
  text-align: center;
  font-style: italic;
  margin-bottom: 20px;
`;

export const WrapperInfo = styled(Col)`
  position: relative;
  left: 5%;
  top: 50px;
  display: block;
  width: 150px;
  height: 100px;
`;

export const WrapperInfoDetails = styled(Col)`
  position: relative;
  right: 10%;
  top: 50px;
  display: block;

  @media (max-width: 900px) {
    right: 50px;
    margin: auto;
  }
`;

export const WrapperInfoDetailsInRight = styled(Col)`
  text-align: right;
  position: relative;
  right: 10%;
  top: 50px;
  display: block;
`;

export const WrapperContent = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};

  padding: 0.313rem;
  margin: 2rem;
`;

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

export const WrapperSecondaryBar = styled(Col)`
  text-align: right;
`;

export const WrapperLore = styled.section`
  margin-top: 2rem;
`;

export const WrapperTips = styled(Row)`
  margin-top: 2rem;

  ul {
    margin-top: 1rem;
  }
`;

export const WrapperH1 = styled.h1`
  font-size: calc(${({ theme }) => theme.fonts.fontSize} * 1.2);
  font-weight: bold;
`;
