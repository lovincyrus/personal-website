import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedinIn, faKeybase } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faGithub, faLinkedinIn, faKeybase, faEnvelope);

export default () => (
  <React.Fragment>
    <span className="contact-icons">
      <a target="_blank" href="https://twitter.com/cyrsgh" rel="noopener noreferrer">
        <FontAwesomeIcon icon={["fab", "twitter"]} className="contact-icon" />
      </a>
      <a target="_blank" href="https://github.com/lovincyrus" rel="noopener noreferrer">
        <FontAwesomeIcon icon={["fab", "github"]} className="contact-icon" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/cyrusgoh" rel="noopener noreferrer">
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} className="contact-icon" />
      </a>
      <a target="_blank" href="https://keybase.io/lovincyrus" rel="noopener noreferrer">
        <FontAwesomeIcon icon={["fab", "keybase"]} className="contact-icon" />
      </a>
      <a target="_blank" href="mailto:hello@lovincyrus.com" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
      </a>
    </span>
    <span className="grey current-location">
      Davis, CA
    </span>
    <span className="grey this-year">
      &copy; this year
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

      .contact-icons {
        bottom: 24px;
        left: 5vw;
        position: absolute;
      }

      .contact-icon {
        margin-right: 2.5vh;
        height: 2.5vh;
        width: 2.5vh;
      }

      .grey {
        color: #696969;
        font-family: Graphik;
        font-size: 2vh;
        font-weight: 500;
      }

      .current-location {
        bottom: 24px;
        position: absolute;
        right: 5vw;
      }

      .this-year {
        top: 6vh;
        position: absolute;
        right: 5vw;
      }
      `}
      </style>
  </React.Fragment>
)