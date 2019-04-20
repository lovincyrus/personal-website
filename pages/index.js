import Head from "next/head";

import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Meta from "../components/Meta";

export default () => (
  <React.Fragment>
    <Head>
      <title>Cyrus Goh</title>
      <meta property="og:url" content="https://www.lovincyrus.com" />
      <Meta />
    </Head>

    <Header />
    <Body />
    <Footer />

    <style jsx global>
      {`
        body {
          font-family: Graphik, Helvetica Neue, Helvetica, Arial, -apple-system,
            system-ui, sans-serif;
          background: rgb(18, 18, 18);
        }

        a {
          text-decoration: none;
          color: #fff;
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 100;
          font-style: normal;
          font-display: auto;
          src: url("/static/fonts/Graphik-100-Thin.otf");
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 300;
          font-style: light;
          font-display: auto;
          src: url("/static/fonts/Graphik-300-Light.otf");
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 400;
          font-style: normal;
          font-display: auto;
          src: url("/static/fonts/Graphik-400-Regular.otf");
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 500;
          font-style: medium;
          font-display: auto;
          src: url("/static/fonts/Graphik-500-Medium.otf");
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 700;
          font-style: bold;
          font-display: auto;
          src: url("/static/fonts/Graphik-700-Bold.otf");
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 900;
          font-style: bold;
          font-display: auto;
          src: url("/static/fonts/Graphik-900-Super.otf");
        }
      `}
    </style>
  </React.Fragment>
);
