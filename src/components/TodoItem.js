import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { text: props.todo.text };
  }

  render() {
    return (
      <div className="todoItem">
        {this.state.text}
      </div>
    );
  }
}

export default TodoItem;
