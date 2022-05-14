import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {<strong>{this.props.name}</strong>}</p>
        {this.props.renderAge > 18 &&
          this.props.renderAge < 65 &&
          this.props.name === "John" && <Age age={this.props.renderAge} />}
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "Jonny",
};
