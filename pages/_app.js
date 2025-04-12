import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/globalStyles'; // (kommer etterpå)
import "../styles/globals.css"; // Importer globale stiler

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
