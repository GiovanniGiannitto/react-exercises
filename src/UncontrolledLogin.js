import React from "react";

export class UncontrolledLogin extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({username, password, remember})
    }
        
    render() {
        return (
            <div>
                <h3>My Uncontrolled Form</h3>

                <form>
                    <input placeholder="Username..." name="username"></input>
                    <input placeholder="Password..." name="password" type="password"></input>
                    <input name="remember" type="checkbox"></input>

                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}