// pages/_document.js
// Norsk dokumentasjon: Konfigurerer Styled Components for å samle opp stiler under SSR.
// Dette sikrer at de genererte klasse-navnene blir konsistente mellom server og klient.
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Opprett en instans av ServerStyleSheet
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // Innpakk appen slik at alle stilene samles opp
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
