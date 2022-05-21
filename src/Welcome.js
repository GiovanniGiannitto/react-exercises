import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <p>Welcome, {<strong>{this.props.name}</strong>}</p>
        {this.props.renderAge && <Age age={23} />}
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "Jonny",
};
