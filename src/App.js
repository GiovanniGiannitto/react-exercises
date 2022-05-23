import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
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
                <TodoList render={
                    (items) => {
                        const [...item] = items
                        return (
                            <ul><li>{item}</li></ul>
                        )
                    }
                }/>
                <Container title="My prop is a title" />
            </div>
        )
    }
}