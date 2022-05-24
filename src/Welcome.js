import React from "react";
import { Age } from "./Age";


export function Welcome(props) {
  return (
    <div className="welcome">
      <p>Welcome, {<strong>{props.name}</strong>}</p>
      {props.renderAge && <Age age={23} />}
    </div>
    
  )
}

/*export class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <p>Welcome, {<strong>{this.props.name}</strong>}</p>
        {this.props.renderAge && <Age age={23} />}
      </div>
    );
  }
}*/

Welcome.defaultProps = {
  name: "Jonny",
};
