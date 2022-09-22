import Document, { Head, Html, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render(): JSX.Element {
    console.log("DOCUMENT IS RUNNING");

    return (
      <Html lang='ko'>
        <Head>
          {/* font */}
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main /> {/* _app */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
