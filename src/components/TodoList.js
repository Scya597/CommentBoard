import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { newTodotext: '', inputListname: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ newTodotext: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.newTodo(this.state.newTodotext, this.props.list.listID);
    this.setState({ newTodotext: '' });
  }

  render() {
    const { listContent } = this.props.list;
    const renderTodo = () => listContent.map(todo =>
      <TodoItem
        key={todo.id}
        todo={todo}
        time={todo.time}
      />);

    return (
      <div className="todoList">
        <h4>{this.props.list.listName}</h4>
        <h5>{this.props.list.time}</h5>
        <div className="ListContent">
          {renderTodo()}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTodotext}
            onChange={this.onChange}
            placeholder="Name: Reply"
          />
        </form>
      </div>
    );
  }
}

export default TodoList;
