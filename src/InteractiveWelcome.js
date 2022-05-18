import React from "react";
import { Welcome } from "./Welcome"

export class InteractiveWelcome extends React.Component {

    state = {
        username: null
    }

    handleInputChange = (event) => {

        const value = event.target.value

        this.setState({
            username: value
        })
    }

    render() {
        return (
            <div>
                <input 
                    name="username"
                    placeholder="Your Name..."
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
                <Welcome name={this.state.username}/>
            </div>
        )
    }
}