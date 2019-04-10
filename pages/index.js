import Head from 'next/head'

import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import Projects from '../components/Projects'

export default () => (
  <React.Fragment>
    <Head>
      <title>Cyrus Goh</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>

    <TopBar />
    <div className="body-container">
      <div className="body-wrapper">
        <div className="intro-wrapper">
          <span className="intro-bio">Developer and cognitive science student at UC Davis.</span>
        </div>
        <Projects />
      </div>
    </div>
    <Footer />

    <style jsx>
      {`
        .body-container {
          display: flex;
          flex-direction: column;
          -webkit-box-pack: start;
          justify-content: flex-start;
          -webkit-box-align: center;
          align-items: center;
          max-width: 100%;
          transform: translateY(56px);
          padding-left: 32px;
          padding-right: 32px;
        }

        .body-wrapper {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          max-width: 768px;
          flex: 1 0 auto;
        }

        .intro-wrapper {
          width: 100%;
          height: 30vh;
          display: flex;
          align-items: center;
          text-align: left;
          padding: 0 2% 0 2%;
        }

        .intro-bio {
          display: block;
          text-align: left;
          font: 1.8rem Graphik;
          color: #fff;
        }

        .right-arrow {
          color: #fff;
          font-size: 28px;
        }

        @media (max-width: 696px) {
          .intro-wrapper {
            width: 100%;
            height: 50vh;
          }

          .intro-bio {
            font: 1.8rem/120% Graphik;
          }
        }
      `}
      </style>
      <style jsx global>
      {`
        body {
          font-family: Graphik,Helvetica Neue,Helvetica,Arial,sans-serif;
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
          src: url("/static/fonts/Graphik-100-Thin.otf")
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 300;
          font-style: light;
          src: url("/static/fonts/Graphik-300-Light.otf")
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 400;
          font-style: normal;
          src: url("/static/fonts/Graphik-400-Regular.otf")
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 500;
          font-style: medium;
          src: url("/static/fonts/Graphik-500-Medium.otf")
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 700;
          font-style: bold;
          src: url("/static/fonts/Graphik-700-Bold.otf")
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 900;
          font-style: bold;
          src: url("/static/fonts/Graphik-900-Super.otf")
        }
      `}
      </style>
  </React.Fragment>
)