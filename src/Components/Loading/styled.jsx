import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background-color: rgba(78, 89, 131, 0.5);
  backdrop-filter: blur(5px);

  z-index: 999;
`;

export const Svg = styled.svg`
  width: 100px;
  height: 100px;
  margin: 20px;
  display: inline-block;
`;
