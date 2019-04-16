import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Clipboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.onCopy = this.onCopy.bind(this);
  }

  onCopy = () => {
    this.setState({ copied: true });
  };

  render() {
    return (
      <React.Fragment>
        <CopyToClipboard onCopy={this.onCopy} text="hello@lovincyrus.com">
          <p>
            <strong>hello@lovincyrus.com</strong>{" "}
            {this.state.copied ? <span>— I gotchu 🙌</span> : null}
          </p>
        </CopyToClipboard>

        <style jsx>
          {`
            strong {
              color: #fff;
            }

            span {
              color: #fff;
            }

            @media (max-width: 500px) {
              span {
                font-size: 13px;
              }
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default Clipboard;
