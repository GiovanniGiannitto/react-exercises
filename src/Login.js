import React from "react";

export class Login extends React.Component {

    state = {
        username: null,
        password: null,
        remember: false
    }

    handleChangeInput = (event) => {

        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === "checkbox" ? checked : value
        }) 
    }

    render() {
        return (
            <div>
                <input name="username" placeholder="Username..." value={this.state.username} onChange={this.handleChangeInput}></input>
                <input name="password" placeholder="Password..." type="password" value={this.state.password} onChange={this.handleChangeInput}></input>
                <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleChangeInput}></input>
            </div>
        )
    }
}