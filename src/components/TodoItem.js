import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { text: props.todo.text, time: props.todo.time };
  }

  render() {
    return (
      <div className="todoItem">
        {this.state.text}
        <span className="time">{this.state.time}</span>
      </div>
    );
  }
}

export default TodoItem;
