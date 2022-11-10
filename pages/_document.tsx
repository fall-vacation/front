import Document, { Head, Html, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
  // API키 :  AIzaSyBS9mU8RuLXVwGdwKItGx4dmOQ2vS0YEcQ
  // Auth 클라이언트 ID : 316528616128-l2tjfkmsjj3enepr1r5jaog8ab960oke.apps.googleusercontent.com

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="google-signin-client_id" content={process.env.NEXT_PUBLIC_NAVER_CLIENT_ID} />

          {/* {isProduction && (
            <>
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
              <meta name="naver-site-verification" content="96a7dd477424010c5a6cb2fcc50c33ad022dcaea" />
              <meta name="google-site-verification" content="nCUYFjD0B5Tj_Aq613BIOiqDziac3d37vpvDzOF6og0" />
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${UA_GA_TRACKING_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${UA_GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )} */}
        </Head>
        <body>
          <Main />
          <div id="x-portal" className="x-portal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
