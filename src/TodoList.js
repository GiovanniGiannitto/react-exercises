import React from "react";

export class TodoList extends React.Component {
  state = {
    items: ["apple", "orange"],
  };

  AddItem = () => {
    const newItem = this.newItem.value;
    this.setState({
      items: [...this.state.items, newItem],
    });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <input
          ref={(input) => (this.newItem = input)}
          type="text"
          placeholder="item..."
        ></input>
        <button type="button" onClick={this.AddItem}>
          Add Item
        </button>
        <ul>
          {items.map((item, index) => (
            <li key={item + index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
