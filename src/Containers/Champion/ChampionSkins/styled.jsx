import styled from 'styled-components';

export const CarouselImage = styled.img`
  @media (min-width: 1024px) {
    width: 700px;
    height: 400px;
  }
  @media (max-width: 1024px) {
    width: 375px;
    height: 190px;
  }
  @media (max-width: 768px) {
    width: 350px;
    height: 190px;
  }
  @media (max-width: 425px) {
    width: 150px;
    height: 100px;
  }
`;
