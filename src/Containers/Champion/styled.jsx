import styled from 'styled-components';

export const WrapperChampionH1 = styled.h1`
  font-size: calc(${({ theme }) => theme.fonts.fontSize} * 2);
`;

export const WrapperChampionDiv = styled.div`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secondatyText};
  font-size: ${({ theme }) => theme.fonts.fontSize};
  font-weight: bold;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%),
    url(${({ image }) => image});
  background-size: cover;
  height: 500px;
`;
