import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
  faKeybase,
  faAngellist
} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faGithub, faLinkedinIn, faKeybase, faAngellist);

// https://fontawesome.com/how-to-use/with-the-api/setup/configuration
config.autoAddCss = false;

export default () => (
  <footer className="footer-container">
    <span className="contact-wrapper">
      <a
        target="_blank"
        href="https://mobile.twitter.com/cyrsgh"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FontAwesomeIcon
          icon={["fab", "twitter"]}
          color="#858585"
          size="lg"
          className="contact-icon"
        />
      </a>
      <a
        target="_blank"
        href="https://github.com/lovincyrus"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FontAwesomeIcon
          icon={["fab", "github"]}
          color="#858585"
          size="lg"
          className="contact-icon"
        />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/cyrusgoh"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon
          icon={["fab", "linkedin-in"]}
          color="#858585"
          size="lg"
          className="contact-icon"
        />
      </a>
      <a
        target="_blank"
        href="https://angel.co/lovincyrus"
        rel="noopener noreferrer"
        aria-label="AngelList"
      >
        <FontAwesomeIcon
          icon={["fab", "angellist"]}
          color="#858585"
          size="lg"
          className="contact-icon"
        />
      </a>
      <a
        target="_blank"
        href="https://keybase.io/lovincyrus"
        rel="noopener noreferrer"
        aria-label="Keybase"
      >
        <FontAwesomeIcon
          icon={["fab", "keybase"]}
          color="#858585"
          size="lg"
          className="contact-icon"
        />
      </a>
    </span>
    <span className="current-location">San Francisco, CA</span>

    <style jsx global>
      {`
        @font-face {
          font-family: "Graphik";
          font-weight: 300;
          font-style: light;
          font-display: auto;
          src: url("/static/fonts/Graphik-300-Light.otf");
        }

        @font-face {
          font-family: "Graphik";
          font-weight: 500;
          font-style: medium;
          font-display: auto;
          src: url("/static/fonts/Graphik-500-Medium.otf");
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
          grid-template-columns: auto 1fr;
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

        @media (max-width: 696px) {
          .footer-container {
            margin-top: 80px;
            transform: translateY(55px);
            position: unset;
          }
        }
      `}
    </style>
  </footer>
);
