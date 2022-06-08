import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initialValue, incrementAmount, incrementInterval }) {
  const [counter, setCounter] = useState(initialValue ?? 0);

  function CounterIncrement() {
    setCounter((c) => c + (incrementAmount ?? 1));
  }

  useEffect(() => {
    console.log("the counter is mounted");
    const time = setInterval(() => {
      CounterIncrement();
    },incrementInterval ?? 1000);
    return () => {
      console.log("the counter is unmounted");
      clearInterval(time);
    };
  });
  return (
    <div>
      <CounterDisplay count={counter} />
    </div>
  );
}

/*export class Counter extends React.Component {
    state = {
        count:  this.props.initialValue ?? 0
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + (this.props.incrementAmount ?? 1)
                }
            })
        }, this.props.incrementInterval ?? 1000);
    }

    render() {
        return (
            <div>
                <CounterDisplay count={this.state.count} />
            </div>
        )
    }
}*/
