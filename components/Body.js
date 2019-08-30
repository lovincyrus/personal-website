import Projects from "../components/Projects";

export default () => (
  <React.Fragment>
    <div className="body-container">
      <div className="body-wrapper">
        <div className="intro-wrapper">
          <span className="intro-bio">
          Front-End Engineer at Tendermint
          </span>
        </div>
        <Projects />
      </div>
    </div>

    <style jsx>
      {`
        @keyframes fadein {
          from {
            opacity: 0;
          }

          to {
            opacity: 0.85;
          }
        }

        .transition {
          opacity-transition: opacity 2000ms ease;
          transform-end: none;
          transform-start: translateY(30px);
          transition: opacity 1000ms ease,
            transform 1200ms cubic-bezier(0.4, 0, 0.3, 1);
        }

        .body-container {
          display: flex;
          flex-direction: column;
          -webkit-box-pack: start;
          justify-content: flex-start;
          -webkit-box-align: center;
          align-items: center;
          max-width: 100%;
          transform: translateY(9vh);
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
          height: 25vh;
          display: flex;
          align-items: center;
          text-align: left;
          justify-content: center;
          align-items: center;
          padding: 0 2% 0 2%;
        }

        .intro-bio {
          display: block;
          text-align: center;
          font: 1.8rem Graphik;
          color: #fff;
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
  </React.Fragment>
);
