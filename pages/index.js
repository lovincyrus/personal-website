import Head from "next/head";

import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

export default () => (
  <React.Fragment>
    <Head>
      <title>Cyrus Goh</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta
        name="description"
        content="Cyrus Goh @cyrsgh · Frontend Engineer · Thinker"
      />
      <meta name="author" content="Cyrus Goh" />
      <meta property="og:site_name" content="Cyrus Goh" />
      <meta property="og:image" content="URL" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Cyrus Goh" />
      <meta
        property="og:description"
        content="Cyrus Goh @cyrsgh · Frontend Engineer · Thinker"
      />
      <meta property="og:url" content="https://www.lovincyrus.com" />
      <meta
        name="keywords"
        content="cyrus goh, lovincyrus, css, css3, html, html5, JavaScript, Python, React.js, Web Development, frontend, front-end, fullstack, web design, UI, user interface, UX, user experience, Software Engineering, Linux, Git, Flask, Algorithms & Data Structures, Infrastructure, Front-End Development, Github, portfolio, projects, firebase, leadership, multi-tasking, teamwork, product thinking, empathetic, detail-oriented, results-oriented, efficiency, creative, analytical, aggiehackers, Aggie Hackers, California, Silicon Valley, Davis, Mountain View, Kuala Lumpur, San Francisco, Malaysia"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content="URL" />
      <meta name="twitter:site" content="@cyrsgh" />
      <meta name="twitter:title" content="Cyrus Goh" />
      <meta
        name="twitter:description"
        content="Cyrus Goh @cyrsgh · Frontend Engineer · Thinker"
      />
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
          src: url("/static/fonts/Graphik-100-Thin.otf");
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 300;
          font-style: light;
          src: url("/static/fonts/Graphik-300-Light.otf");
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 400;
          font-style: normal;
          src: url("/static/fonts/Graphik-400-Regular.otf");
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 500;
          font-style: medium;
          src: url("/static/fonts/Graphik-500-Medium.otf");
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 700;
          font-style: bold;
          src: url("/static/fonts/Graphik-700-Bold.otf");
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 900;
          font-style: bold;
          src: url("/static/fonts/Graphik-900-Super.otf");
        }
      `}
    </style>
  </React.Fragment>
);
