import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name="John" renderAge={true}/>
                <Counter initialValue={2} incrementAmount={2} incrementInterval={2000} />
                <ClickCounter />
                <ClickTracker />
                <InteractiveWelcome />
                <Login />
                <UncontrolledLogin />
            </div>
        )
    }
}