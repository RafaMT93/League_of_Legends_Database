import styled from 'styled-components';

export const LoadingSkeleton = styled.div`
  min-width: ${({ width }) => width}rem,
  height: ${({ height }) => height}rem,
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: skeleton 1.5s infinite alternate.
  @keyframes skeleton {  
      from {
      background-position: 0px;
      opacity: 0;
    }
    to {
      background-position: -200%;
      opacity: 1;
    }
  }
`;
