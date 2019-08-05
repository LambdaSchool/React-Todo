import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "first item",
          id: 1528817077286,
          completed: false,
        },
        {
          task: "second item",
          id: 1528817077287,
          completed: false,
        },
      ],
      newTodoText: "testing",
    };
  }

  addTodo() {
    if (this.state.todos.length > 2) return;
    this.setState({
      ...this.state,
      todos: [
        ...this.state.todos,
        {
          task: this.state.newTodoText,
          id: Math.random() * Number.MAX_VALUE,
          completed: false,
        },
      ],
    });
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    this.addTodo();
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
