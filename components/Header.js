import Link from "next/link";

export default () => (
  <nav className="top-container">
    <span>
      <Link prefetch href="/">
        <a>Cyrus Goh</a>
      </Link>
    </span>
    <span className="right-wrapper">
      <Link href="/about">
        <button className="about-btn">About</button>
      </Link>
    </span>
    <style jsx>
      {`
        .top-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: "logo actions";
          position: absolute;
          align-items: center;
          top: 0px;
          left: 0px;
          right: 0px;
          box-shadow: none;
          padding: 26px;
        }

        .right-wrapper {
          display: flex;
          -webkit-box-pack: end;
          justify-content: flex-end;
          -webkit-box-align: center;
          align-items: center;
          grid-area: actions / actions / actions / actions;
        }

        a {
          color: white;
          font-weight: 500;
          text-decoration: none;
          text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 0px;
        }

        .about-btn {
          -webkit-appearance: none;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-flex: none;
          -ms-flex: none;
          flex: none;
          -webkit-align-self: center;
          -ms-flex-item-align: center;
          align-self: center;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
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
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
          border: 1px solid #007aff;
          color: #fff;
          background-color: #007aff;
          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
        }
      `}
    </style>
    <style jsx global>
      {`
        .main {
          padding: 25px 50px;
        }

        a {
          color: white;
          text-decoration: none;
        }

        @media (max-width: 500px) {
          .main {
            padding: 25px 15px;
          }
        }
      `}
    </style>
  </nav>
);
