import Head from 'next/head'
import Link from 'next/link'

import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import ProjectsList from '../components/ProjectsList';

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

    <div className="main">
      <TopBar />
      <div className="wrapper-home">
        <div className="wrapper-intro">
          <section className="intro">
            <h1 className="intro-greeting">Hi, I'm Cyrus.</h1>
            <span className="intro-bio">Developer and cognitive science student at UC Davis.</span>
            <span className="intro-bio">Currently exploring frontend opportunities. Previously breaking things at 8x Protocol, HackDavis, Fave, Trust Wallet (acq. Binance) 
              <Link href="/about">
                <a className="right-arrow"> &#8594;</a>
              </Link>
            </span>
          </section>
        </div>
      </div>
      <ProjectsList />
      <Footer />
    </div>

    <style jsx>
      {`
        .wrapper-home {
          padding: 0 23%;
        }

        .wrapper-intro {
          width: 100%;
          height: 50vh;
          display: flex;
          align-items: center;
        }

        .intro {
          margin: 0 auto;
          text-align: left;
        }

        .intro-greeting {
          display: block;
          color: #007AFF;
          font: 2.3rem/120% Graphik;
          font-weight: 700;
        }

        .intro-bio {
          display: block;
          font: 2.1rem/120% Graphik;
          color: #fff;
        }

        .right-arrow {
          color: white;
          font-size: 28px;
        }

        @media (max-width: 1440px) {
          .wrapper-home {
            padding: 0 12.5% 0 12.5%;
          }
        }

        @media (max-width: 696px) {
          .wrapper-intro {
            width: 100%;
            height: 60vh;
          }

          .intro-greeting {
            font: 2rem/120% Graphik;
            font-weight: 700;
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