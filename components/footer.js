import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedinIn, faKeybase } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faGithub, faLinkedinIn, faKeybase, faEnvelope);

// https://fontawesome.com/how-to-use/with-the-api/setup/configuration
config.autoAddCss = false

export default () => (
  <footer className="footer-container">
    <span className="contact-wrapper">
      <a target="_blank" href="https://twitter.com/cyrsgh" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={["fab", "twitter"]}
          color="#858585"
          size="lg"
          className="contact-icon"
        />
      </a>
      <a target="_blank" href="https://github.com/lovincyrus" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={["fab", "github"]}
          color="#858585"
          size="lg"
          className="contact-icon"
        />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/cyrusgoh" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={["fab", "linkedin-in"]}
          color="#858585"
          size="lg"
          className="contact-icon"
        />
      </a>
      <a target="_blank" href="https://keybase.io/lovincyrus" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={["fab", "keybase"]}
          color="#858585"
          size="lg"
          className="contact-icon"
        />
      </a>
      <a target="_blank" href="mailto:hello@lovincyrus.com" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faEnvelope}
          color="#858585"
          size="lg"
          className="contact-icon"
        />
      </a>
    </span>
    <span className="current-location">
      Davis, CA
    </span>

    <style jsx global>
      {`
        @font-face {
          font-family: "Graphik";
          font-weight: 300;
          font-style: light;
          src: url("/static/fonts/Graphik-300-Light.otf")
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 500;
          font-style: medium;
          src: url("/static/fonts/Graphik-500-Medium.otf")
        }

        .contact-wrapper {
          left: 2vw;
        }

        .contact-icon {
          margin-right: 2.5vh;
          height: 2.5vh;
          width: 2.5vh;
        }

        .current-location {
          color: #858585;
          font-family: Graphik;
          font-size: 2vh;
          font-weight: 500;
          bottom: 24px;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: end;
          -webkit-box-pack: end;
          -webkit-justify-content: flex-end;
          -ms-flex-pack: end;
          justify-content: flex-end;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          grid-area: actions / actions / actions / actions;
        }
      `}
      </style>
      <style jsx>
      {`
        footer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: "logo actions";
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          bottom: 0px;
          left: 0px;
          right: 0px;
          box-shadow: none;
          padding: 26px;
          position: absolute;
        }

        @media (max-width: 639px) {
          .footer-container {
          }
        }
      `}
      </style>
  </footer>
)