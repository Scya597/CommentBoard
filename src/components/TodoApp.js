import React, { Component } from 'react';
import axios from 'axios';
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
    this.fetchData = this.fetchData.bind(this);

    let initial = [];
    axios.get('/api')
    .then((res) => {
      initial = res.data.TodoApp;
      this.setState({ todoLists: initial });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  fetchData() {
    axios.get('/api')
    .then((res) => {
      const newTodoLists = res.data.TodoApp;
      this.setState({ todoLists: newTodoLists });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  addTodoItemInList(text, id) {
    axios.post('/api/todoItem', {
      id, text,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

    this.fetchData();
  }

  addTodoListInApp(text) {
    axios.post('/api/todoList', {
      listID: uuid(),
      listName: text,
      listContent: [],
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

    this.fetchData();
  }

  render() {
    const { todoLists } = this.state;
    const renderTodoLists = () => todoLists.map(list =>
      <TodoList
        key={list.listID}
        list={list}
        newTodo={this.addTodoItemInList}
        time={list.time}
      />);

    return (
      <div>
        <div className="title">
          <h1>Comment Board</h1>
          <h6> 物理一 詹雨安 </h6>
        </div>
        {renderTodoLists()}
        <AddTodoList newTodoList={this.addTodoListInApp} />
      </div>
    );
  }
}

export default TodoApp;
