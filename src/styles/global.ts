import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  html, body, div#__next {
    width: 100vw;
    height: 100vh;
  }

  body {
    background: #333;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: sans-serif;
    font-weight: 500;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
