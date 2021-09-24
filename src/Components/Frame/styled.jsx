import styled from 'styled-components';

export const WrapperSection = styled.section`
  display: block;
  text-align: center;
`;

export const WrapperFrame = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border: 1px solid #333;
  background-image: url(${({ image }) => image});
  background-size: cover;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 4rem;
    width: 4rem;
  }
`;

export const WrapperChampionName = styled.h3`
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: calc(${({ theme }) => theme.fonts.fontSize} / 1.5);
  }
`;
