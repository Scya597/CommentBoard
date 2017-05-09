import React, { Component } from 'react';

class AddTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.newTodoList(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add TodoList"
            value={this.state.text}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default AddTodoList;
