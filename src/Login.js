import React, { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  console.log(data);
  return (
    <form>
      <input
        onChange={handleInputChange}
        placeholder="Username..."
        name="username"
        type="text"
        value={data.username}
      ></input>
      <input
        onChange={handleInputChange}
        placeholder="Password..."
        name="password"
        type="password"
        value={data.password}
      ></input>
      <input
        onChange={handleInputChange}
        name="remember"
        type="checkbox"
        checked={data.remember}
      ></input>
    </form>
  );
}

/*export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleChangeInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  onLogin = (state) => {
    return console.log(state)
    
  }

  resetAllInputs = () => {
      this.setState({
          username: "",
          password: "",
          remember: false
      })
  }

  render() {
    const buttonStyle = {
      backgroundColor: this.state.password.length < 8 ? "red" : "green",
    }
    
    return (
      <div>
        <input
          name="username"
          placeholder="Username..."
          value={this.state.username}
          onChange={this.handleChangeInput}
        ></input>
        <input
          name="password"
          placeholder="Password..."
          type="password"
          value={this.state.password}
          onChange={this.handleChangeInput}
        ></input>
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleChangeInput}
        ></input>
        <button
          style={buttonStyle}
          name="login"
          disabled={!this.state.username || !this.state.password}
          onClick={() => this.onLogin(this.state)}
        >
          Login
        </button>
        <button name="reset" onClick={this.resetAllInputs}>Reset</button>
      </div>
    );
  }
}*/
