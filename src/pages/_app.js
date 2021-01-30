import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
import Head from '../components/Head';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  a {
    color: ${({ theme }) => theme.colors.selected}
  }

  .lottie-animation {
    position: absolute;
  }

  .lottie-animation.index {
    width: 50%;
    top: 30%;
    left: 30%;
    z-index: 1;
  }
  .lottie-animation.question {
    width: 80%;
    top: 200px;
    left: 50px;
  }

  .lottie-animation.result {
    display: inline-block;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head
        title={db.title}
        image={db.bg}
        description={db.description}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
