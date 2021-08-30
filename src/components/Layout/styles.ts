import styled from 'styled-components';

export const LayoutContainer = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  button {
    background: ${({ theme }) => theme.white};
    border: 0;
    border-radius: 5px;
    color: ${({ theme }) => theme.background};
    font-weight: 600;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    text-transform: capitalize;
  }
`;
