import styled from 'styled-components';

export const WrapperChampionDiv = styled.div`
  background-image: url(${({ image }) => image});
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secondatyText};
  font-weight: bold;
`;
