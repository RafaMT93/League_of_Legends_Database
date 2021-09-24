import styled, { keyframes } from 'styled-components';

const KeyFrameLoading = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const LoadingSkeleton = styled.div`
  background-color: black;
  min-width: ${({ width }) => width}rem,
  height: ${({ height }) => height}rem,
  animation: ${KeyFrameLoading} 500ms infinite alternate.
`;
