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

    <div className="body-container">
      <div className="body-wrapper">
        <TopBar />
        <div className="home-wrapper">
          <div className="intro-wrapper">
            <section className="intro">
              <span className="intro-bio">Developer and cognitive science student at UC Davis.</span>
            </section>
          </div>
        </div>
        < Projects />
        <Footer />
      </div>
    </div>

    <style jsx>
      {`
        .body-container {
          display: flex;
          flex-direction: column;
          -webkit-box-pack: start;
          justify-content: flex-start;
          -webkit-box-align: center;
          align-items: center;
          height: 100%;
          max-width: 100%;
        }

        .body-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          -webkit-box-pack: start;
          justify-content: flex-start;
          padding-top: 64px;
          padding-left: 32px;
          padding-right: 32px;
          position: relative;
          width: 100%;
          max-width: 768px;
          flex: 1 0 auto;
        }

        .home-wrapper {
          padding: 0 23%;
        }

        .intro-wrapper {
          width: 100%;
          height: 23vh;
          display: flex;
          align-items: center;
        }

        .intro {
          margin: 0 auto;
          text-align: left;
        }

        .intro-bio {
          display: block;
          font: 2rem/120% Graphik;
          color: #fff;
        }

        .right-arrow {
          color: #fff;
          font-size: 28px;
        }

        @media (max-width: 1440px) {
          .home-wrapper {
            padding: 0 2% 0 2%;
          }
        }

        @media (max-width: 696px) {
          .intro-wrapper {
            width: 100%;
            height: 60vh;
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