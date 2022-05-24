import React, { useEffect, useState } from "react";

export function ClickCounter({initialValue = 0, onCounterChange}) {
  const [counter, setCounter] = useState(initialValue);
  
 

  useEffect(() => {
    onCounterChange(counter)
  }, [counter, onCounterChange])
  
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
