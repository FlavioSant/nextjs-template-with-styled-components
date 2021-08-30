import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    background: ${props => props.theme.background};
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, a {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  div {
    display: flex;
  }
`;

export default GlobalStyle;
