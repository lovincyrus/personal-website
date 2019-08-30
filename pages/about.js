import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Clipboard from "../components/Clipboard";
import Meta from "../components/Meta";

export default () => (
  <React.Fragment>
    <Head>
      <title>About - Cyrus Goh</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <meta property="og:url" content="https://www.lovincyrus.com/about" />
      <Meta />
    </Head>

    <div className="main">
      <Header />
      <section className="container">
        <div className="about-wrapper">
          <div className="about-content">
            <div className="about-card">
              <div className="img-wrapper">
                <img
                  sizes="(max-width: 1800px) 100vw, 1800px"
                  src="/static/img/nutnut.jpg"
                  alt="hero"
                  rel="prefetch"
                />
              </div>
            </div>
            <div className="about-bio">
              <h3>Hi, I'm Cyrus</h3>
              <p>
                Front-End Engineer at <a href="http://tendermint.com" target="_blank" rel="noopener noreferrer" aria-label="Tendermint">Tendermint</a>.
                Recent cognitive science graduate at UC Davis.
              </p>
              <p>
                Previously:{" "}
                <span className="prev-companies">
                  8x Protocol, HackDavis, Fave, Trust Wallet (acq. Binance).
                </span>
              </p>
              <p>
                I love to learn by doing things, which is why I am always in
                progress. I also learn in public at{" "}
                <a
                  href="https://docs.lovincyrus.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitBook"
                >
                  <strong>GitBook</strong>
                </a>
                . Sometimes I explain why I do what I do in this{" "}
                <a
                  href="https://blog.lovincyrus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Blog"
                >
                  <strong>blog</strong>
                </a>
                . Occasionally, I post photographs on{" "}
                <a
                  href="https://vsco.co/lovincyrus"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VSCO"
                >
                  <strong>VSCO</strong>
                </a>
                . When I'm not building apps, I enjoy having deep conversations
                with people and shooting film photography using Olympus XA2 and
                Nikon FM2n.
              </p>
              <p>Say hi for 💬💡☕️ </p>
              <Clipboard />
              <a
                href="/static/resume/cyrusgoh-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Résumé"
              >
                <button className="resume-btn">résumé</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    <style jsx>
      {`
      .container {
        position: relative;
        max-width: 1200px;
        height: 100%;
        min-height: calc(100vh - 100px);
        margin: 0px auto;
        padding: 0px 1.5rem;
      }

      .about-bio {
        line-height: 1.6;
      }

      .prev-companies {
        font-weight: 700;
      }

      .img-wrapper {
        position: relative;
        overflow: hidden;
      }

      img {
        width: 100%;
      }

      h3 {
        color: #fff;
        line-height: 1;
        font-weight: 500;
        font-size: 2em;
        margin: 0px 0px 1rem;
      }

      p {
        color: #858585;
        font-size: 1em;
        font-weight: 400;
        line-height: 1.6;
        margin: 0px 0px 2rem;
      }

      strong {
        color: #fff;
      }

      img.emoji {
        display: inline-block;
        height: 1em;
        width: 1em;
        vertical-align: -0.1em;
        margin: 0px 0.05em 0px 0.1em;
      }

      .resume-btn {
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        white-space: nowrap;
        word-break: keep-all;
        cursor: pointer;
        line-height: 1;
        position: relative;
        text-align: center;
        padding: 10px 20px;
        opacity: 1;
        box-shadow: 0 1px 2px rgba(0,0,0,0.04);
        border: 1px solid #007AFF;
        color: #FFF;
        background-color: #007AFF;
        text-shadow: 0 1px 1px rgba(0,0,0,0.08);
        margin-top: 17px;
      }

      @media screen and (min-width: 60em) {
        h3 {
          font-size: 2.5em;
        }
      }

      @media screen and (min-width: 40em) {
        .container {
          transform: translateY(30px);
        }

        .about-wrapper {
          min-height: calc(100vh - 100px);
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: justify;
          justify-content: space-between;
          flex-flow: row;
        }

        .about-content {
          display: flex;
          align-items: flex-start;
          -webkit-box-pack: justify;
          justify-content: space-between;
          flex-flow: row;
        }

        .about-card {
          font-size: 1.1em;
          flex: 0 0 32%;
          margin: 0px;
        }

        .about-bio {
          flex: 0 0 65%;
        }
      }

      @media (max-width: 639px) {
        .container {
          transform: translateY(80px);
        }

        .about-bio {
          transform: translateY(20px);
        }
    `}
    </style>

    <style jsx global>
      {`
        body {
          font-family: Graphik, Helvetica Neue, Helvetica, Arial, Sans-Serif;
          background: rgb(18, 18, 18);
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 400;
          font-style: light;
          font-display: auto;
          src: url("/static/fonts/Graphik-400-Regular.otf");
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 300;
          font-style: light;
          font-display: auto;
          src: url("/static/fonts/Graphik-300-Light.otf");
        }
      `}
    </style>
  </React.Fragment>
);
