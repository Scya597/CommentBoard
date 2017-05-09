import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodoList from './AddTodoList';

const uuid = require('node-uuid');

const cloneData = (data) => {
  const jsonString = JSON.stringify(data);
  return JSON.parse(jsonString);
};

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoLists: [],
    };
    this.addTodoItemInList = this.addTodoItemInList.bind(this);
    this.addTodoListInApp = this.addTodoListInApp.bind(this);
  }

  addTodoItemInList(text, id) {
    const newTodoLists = cloneData(this.state.todoLists);
    newTodoLists.forEach((list) => {
      if (list.listID === id) {
        list.listContent.push({ id: uuid(), text, completed: false });
      }
    });
    this.setState({ todoLists: newTodoLists });
  }

  addTodoListInApp(text) {
    const newTodoList = {
      listID: uuid(),
      listName: text,
      listContent: [],
    };
    const newTodoLists = this.state.todoLists;
    newTodoLists.push(newTodoList);
    this.setState({ todoLists: newTodoLists });
  }

  render() {
    const { todoLists } = this.state;
    const renderTodoLists = () => todoLists.map(list =>
      <TodoList
        key={list.listID}
        list={list}
        newTodo={this.addTodoItemInList}
      />);

    return (
      <div>
        <div className="title">
          <h1>Todo App</h1>
          <h6> 物理一 詹雨安 </h6>
          <AddTodoList newTodoList={this.addTodoListInApp} />
        </div>
        {renderTodoLists()}
      </div>
    );
  }
}

export default TodoApp;
