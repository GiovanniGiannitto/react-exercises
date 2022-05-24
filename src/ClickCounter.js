import React, { useState } from "react";

export function ClickCounter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);
  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }
  return (
    <button onClick={handleCounterIncrement}>
      Counter: {counter}
    </button>
  );
}

/*export class ClickCounter extends React.Component {
    state = {
        count: 0
    }

    handleCounterIncrement() {
        this.setState((state) => {
            return {
                count: state.count + 1
            }
        })
    }

    render() {
        return (
            <button onClick={this.handleCounterIncrement.bind(this)}>
                Counter: {this.state.count}
            </button>
        )
    }
}*/
