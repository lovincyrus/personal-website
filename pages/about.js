import Head from 'next/head'
import Link from 'next/link'

import TopBar from '../components/topbar'
import Footer from '../components/footer'

export default () => (
  <React.Fragment>
    <Head>
      <title>About - Cyrus Goh</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>

    <div className="main">
      <TopBar />
      <section className="container">
        <div className="about-wrapper">
          <div className="about-content">
            <div className="about-card">
              <div className="img-wrapper">
                <img sizes="(max-width: 1800px) 100vw, 1800px" src="/static/img/nutnut.jpg" alt="hero" />
              </div>
            </div>
            <div className="about-bio">
              <h3>Hi, I'm Cyrus</h3>
              <p>I am a software engineer, app developer, JS enthusiast and a cognitive science student at UC Davis. I love to learn by doing things, which is why I am always in progress. I firmly believe that it is not what technology stack you use that make the product great, it is how you implement it.</p>
              <p>When I'm not building apps, I enjoy having deep conversations with people and shooting film photography using Olympus XA2 and Nikon FM2n.
</p>
              <p><a href="https://blog.lovincyrus.com/"><strong>Learn more</strong></a> about why I do what I do.</p>
              <p><a href="mailto:hello@lovincyrus.com">📩 <strong>hello@lovincyrus.com</strong></a></p>
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

      .img-wrapper {
        position: relative;
        overflow: hidden;
      }

      img {
        width: 100%;
      }

      h3 {
        color: white;
        line-height: 1;
        font-weight: bold;
        font-size: 2em;
        margin: 0px 0px 1rem;
      }

      p {
        color: white;
        font-size: 1em;
        font-weight: 300;
        line-height: 1.6;
        margin: 0px 0px 2rem;
      }

      strong {
        color: #007AFF;
      }

      img.emoji {
        display: inline-block;
        height: 1em;
        width: 1em;
        vertical-align: -0.1em;
        margin: 0px 0.05em 0px 0.1em;
      }

      @media screen and (min-width: 60em) {
        h3 {
          font-size: 2.5em;
        }
      }

      @media screen and (min-width: 40em) {
        .container {
          padding: 0px 3rem;
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
    `}
    </style>

    <style jsx global>
    {`
      body {
        font-family: Graphik,Helvetica Neue,Helvetica,Arial,sans-serif;;
        background: rgb(18, 18, 18);
      }

      @font-face {
          font-family: "Graphik";
          font-weight: 300;
          font-style: light;
          src: url("/static/fonts/Graphik-300-Light.otf")
        }
    `}
    </style>
  </React.Fragment>
)