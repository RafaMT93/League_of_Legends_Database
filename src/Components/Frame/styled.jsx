import styled from 'styled-components';

export const WrapperSection = styled.section`
  display: block;
  text-align: center;
`;

export const WrapperFrame = styled.div`
  height: 7rem;
  width: 7rem;
  border: 1px solid #333;
  background-image: url(${({ image }) => image});
  background-size: cover;
  cursor: pointer;
`;

export const WrapperChampionName = styled.h3`
  font-weight: bold;
`;
