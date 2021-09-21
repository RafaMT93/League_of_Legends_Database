import styled from 'styled-components';

export const WrapperChampionDiv = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secondatyText};
  font-size: ${({ theme }) => theme.fonts.fontSize};
  font-weight: bold;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%),
    url(${({ image }) => image}) no-repeat;
  background-size: 100%;
  height: 500px;
`;

export const WrapperInfo = styled.div`
  position: relative;
  left: 5%;
  top: 100px;
  display: block;
  width: 150px;
  height: 100px;
`;

export const WrapperContent = styled.div`
  padding: 0.313rem;
  margin: 2rem;
`;

export const WrapperChampionH1 = styled.h1`
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

export const WrapperLore = styled.section`
  margin-top: 2rem;
`;
