import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import data from '../config/projects';

export default () => (
  <React.Fragment>
    <Head>
      <title>Projects - Cyrus Goh</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
    
    <Header />
    <div className="projects-container">
      <a href="http://www.lovincyrus.com" target="_blank" rel="noopener noreferrer">
        <div className="projects-wrapper">
          <div className="project">
            <p className="name">Project name</p>
            <p className="description">project.description</p>
          </div>
        </div>
      </a>
    </div>
    <Footer />

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
    <style jsx>
    {`
      .projects-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}
    </style>
  </React.Fragment>
)