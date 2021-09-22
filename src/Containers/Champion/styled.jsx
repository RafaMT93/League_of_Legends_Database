import styled from 'styled-components';

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
