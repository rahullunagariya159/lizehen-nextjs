import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* favicon */}
          <link rel="shortcut icon" href="images/favicon.ico" />

          {/* css */}
          <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />

          <link
            href="css/materialdesignicons.min.css"
            rel="stylesheet"
            type="text/css"
          />

          {/* Pe-icon-7 icon */}
          <link
            rel="stylesheet"
            type="text/css"
            href="css/pe-icon-7-stroke.css"
          />

          {/* <!-- magnific pop-up --> */}
          <link
            rel="stylesheet"
            type="text/css"
            href="css/magnific-popup.css"
          />
          <link href="css/style.css" rel="stylesheet" type="text/css" />

          {/* <!-- for slider --> */}
          <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
            crossOrigin="anonymous"
          ></script>

          {/* <!-- for Animation --> */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />

          <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
