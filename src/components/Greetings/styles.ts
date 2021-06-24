import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  height: 100vh;

  img {
    animation: ${rotate} 15s linear infinite;
    margin: 1rem 0;
    height: 300px;
    width: 400px;
  }
`;
