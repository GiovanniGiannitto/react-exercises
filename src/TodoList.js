import React from "react";

export class TodoList extends React.Component {
  state = {
    items: ["apple", "orange"],
    input: null
  };

  handleInputItems = (event) => {
    const value =  event.target.value
    this.setState({
      input: value
    })
  }

  componentDidMount = () => {
    this.setState({
      items: this.state.items.map((item, index) => (
        <li key={item + index}>{item}</li>
      ))
    })
  }

  AddItem = () => {
    this.state.items.push(<li>{this.state.input}</li>)
    this.setState({
      input: ""
    })
  };

  ResetLists = () => {
    this.setState({
      items: [],
      input: ""
    })
  }

  RemoveItem = () => {
    this.state.items.pop(<li>{this.state.input}</li>)
    this.setState({
      input: ""
    })
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleInputItems}
          type="text"
          placeholder="item..."
          value={this.state.input}
        ></input>
        <button type="button" onClick={this.AddItem}>
          Add Item
        </button>
        <button type="button" onClick={this.ResetLists}>Reset lists</button>
        <button type="button" onClick={this.RemoveItem}>Remove item</button>
        {this.props.render(this.state.items)}
      </div>
    );
  }
}

