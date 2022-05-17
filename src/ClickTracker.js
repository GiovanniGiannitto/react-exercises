import React from "react";

export class ClickTracker extends React.Component {

    state = {
        buttonId: null
    }

    handleClickButton = (event) => {
        this.setState ({
            buttonId: event.target.name
        })
    }    

    render() {
        return (
            <div>
                <button onClick={this.handleClickButton} name="button-1">Click-1</button>
                <button onClick={this.handleClickButton} name="button-2">Click-2</button>
                <button onClick={this.handleClickButton} name="button-3">Click-3</button>
                <h1>{this.state.buttonId}</h1>
            </div>
        )
    }
}