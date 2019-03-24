import Head from 'next/head'

import TopBar from '../components/topbar'
import Footer from '../components/footer'

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
            <span className="intro-bio">Currently exploring frontend opportunities. Previously breaking things at 8x Protocol, HackDavis, Fave, Trust Wallet (acq. Binance)</span>
          </section>
        </div>
      </div>
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
          font: 2.3rem/120% -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";;
        }

        .intro-bio {
          display: block;
          font: 2.1rem/120% -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";;
          color: #fff;
        }

        @media (max-width: 1440px) {
          .wrapper-home {
            padding: 0 12.5% 0 12.5%;
          }
        }

        @media (max-width: 696px) {
          .intro-greeting {
            font: 2.5rem/120% -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";;
          }

          .intro-bio {
            font: 1.8rem/120% -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";;
          }
        }
      `}
      </style>
      <style jsx global>
      {`
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          background: rgb(18, 18, 18);
        }
      `}
      </style>
  </React.Fragment>
)